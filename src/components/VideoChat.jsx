import React, { useState, useEffect, useRef } from "react"
import "../../style/mobile.css"

export default function VideoChat({ socket, localStream, remoteStream, onSendTyping }) {
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const [messageInput, setMessageInput] = useState("")
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef(null)
  const [userCount, setUserCount] = useState(1)

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream
    }
  }, [localStream])

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream
    }
  }, [remoteStream])

  useEffect(() => {
    if (!socket) return

    const handleMessage = (event) => {
      let data
      try {
        data = JSON.parse(event.data)
      } catch { return }
      switch (data.type) {
        case "chat":
          setMessages((prev) => [...prev, { sender: "stranger", text: data.text }])
          break
        case "typing":
          setIsTyping(data.status)
          break
        case "userCount":
          setUserCount(data.count)
          break
        default:
          break
      }
    }

    socket.addEventListener("message", handleMessage)
    return () => {
      socket.removeEventListener("message", handleMessage)
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
  }, [socket])

  const handleSendMessage = () => {
    if (!messageInput.trim()) return
    const msg = { type: "chat", text: messageInput }
    socket?.send(JSON.stringify(msg))
    setMessages((prev) => [...prev, { sender: "you", text: messageInput }])
    setMessageInput("")
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
    setIsTyping(false)
    onSendTyping?.(false)
  }

  const handleTyping = () => {
    if (!isTyping) {
      setIsTyping(true)
      onSendTyping?.(true)
    }
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      onSendTyping?.(false)
    }, 1500)
  }

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <button className="exit-btn">← Exit</button>
        <img src="https://www.omegle.com/static/favicon.png" alt="logo" className="logo" />
        <span className="title">omegle.com</span>
        <span className="online-count">{userCount} online</span>
      </div>

      {/* Video Area */}
      <div className="video-section">
        <video className="remote-video" ref={remoteVideoRef} autoPlay playsInline />
        {!remoteStream && <div className="loader"></div>}
        <video className="local-video" ref={localVideoRef} autoPlay muted playsInline />
      </div>

      {/* Messages */}
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && <div className="typing">Stranger is typing...</div>}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          onInput={handleTyping}
        />
        <button className="send-btn" onClick={handleSendMessage}>&gt;</button>
        <button className="new-btn">New</button>
      </div>
    </div>
  )
}
