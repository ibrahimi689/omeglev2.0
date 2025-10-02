import React, { useState, useEffect, useRef } from 'react'

const VideoChat = ({ socket, isConnected, localStream, remoteStream, onExit, onSendMessage, onSendTyping, userCount }) => {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  const [typingIndicator, setTypingIndicator] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const messagesEndRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Set video streams
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

  // Handle WebSocket messages
  useEffect(() => {
    if (socket) {
      const handleMessage = (event) => {
        const data = JSON.parse(event.data)
        
        switch (data.type) {
          case 'message':
            setMessages(prev => [...prev, { type: 'stranger', content: data.message, timestamp: Date.now() }])
            break
          case 'stranger_connected':
            setMessages(prev => [...prev, { type: 'system', content: 'Stranger connected', timestamp: Date.now() }])
            break
          case 'stranger_disconnected':
            setMessages(prev => [...prev, { type: 'system', content: 'Stranger disconnected', timestamp: Date.now() }])
            break
          case 'waiting':
            setMessages(prev => [...prev, { type: 'system', content: data.message || 'Looking for people online', timestamp: Date.now() }])
            break
          case 'typing':
            setTypingIndicator(data.isTyping)
            break
        }
      }

      socket.addEventListener('message', handleMessage)
      return () => socket.removeEventListener('message', handleMessage)
    }
  }, [socket])

  const handleSendMessage = () => {
    if (messageInput.trim() && isConnected) {
      const message = messageInput.trim()
      setMessages(prev => [...prev, { type: 'user', content: message, timestamp: Date.now() }])
      onSendMessage(message)
      setMessageInput('')
      setIsTyping(false)
      onSendTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleInputChange = (e) => {
    setMessageInput(e.target.value)
    
    if (isConnected && !isTyping) {
      setIsTyping(true)
      onSendTyping(true)
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set new timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      onSendTyping(false)
    }, 2000)
  }

  return (
    <div className="video-container" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#000'
    }}>
      {/* Header - Screenshot ke according exact styling */}
      <div className="chat-header omegle-style-header" style={{
        backgroundColor: '#ffffff',
        color: '#000',
        padding: '8px 20px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ddd',
        height: '60px',
        flexShrink: 0,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}>
        <div 
          className="chat-exit" 
          onClick={onExit}
          style={{
            color: '#ff4444',
            fontSize: '1rem',
            cursor: 'pointer',
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          ⟵ Exit
        </div>

        <div className="omegle-logo-text" style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textAlign: 'left'
        }}>
          <img src="/logo.png" alt="Logo" className="logo-img" style={{
            width: '50px',
            height: '50px',
            borderRadius: '8px'
          }} />
          <div className="logo-text-block" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            lineHeight: 1.2
          }}>
            <span style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #f58220, #ff6b35)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              omegle<span style={{ color: '#666', fontWeight: 'normal', fontSize: '1.4rem' }}>.com</span>
            </span>
            <span className="omegle-tagline" style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: 'black',
              transform: 'rotate(-5deg)',
              fontStyle: 'italic',
              marginTop: '5px'
            }}>
              Talk to strangers!
            </span>
          </div>
        </div>

        <div className="user-count-indicator" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          color: '#666',
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)'
        }}>
          <div className="eye-icon" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '18px',
            height: '18px',
            color: '#4a90e2'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" fill="currentColor"/>
              <path d="M12 5C7.52981 5 3.73013 7.94288 2.45801 12C3.73013 16.0571 7.52981 19 12 19C16.4702 19 20.2699 16.0571 21.542 12C20.2699 7.94288 16.4702 5 12 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span id="userCountText" style={{
            fontWeight: 500,
            color: '#333'
          }}>
            {userCount} online
          </span>
        </div>
      </div>

      {/* Video Section - Screenshot ke according exact layout */}
      <div className="video-section" style={{
        flex: 1,
        display: 'flex',
        position: 'relative',
        background: '#000'
      }}>
        {/* Main Video Area - Stranger ka video */}
        <div className="stranger-video" style={{
          width: '100%',
          height: '100%',
          background: '#000',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <video
            ref={remoteVideoRef}
            id="remoteVideo"
            autoPlay
            playsInline
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              display: 'block',
              objectFit: 'cover'
            }}
          />
          
          {/* Loading indicator center me - Screenshot ke according */}
          {!remoteStream && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '18px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                border: '4px solid rgba(255,255,255,0.2)',
                borderTop: '4px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 15px'
              }}></div>
              Looking for people online...
            </div>
          )}
        </div>

        {/* User Video - RIGHT side pe selfie window (Screenshot ke according) */}
        <div className="user-video" style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '160px',
          height: '120px',
          background: '#333',
          border: '3px solid #fff',
          borderRadius: '12px',
          overflow: 'hidden',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          <video
            ref={localVideoRef}
            id="localVideo"
            autoPlay
            playsInline
            muted
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Chat Section - Bottom me exactly screenshot ke according */}
      <div className="video-chat-section" style={{
        background: '#1a1a2e',
        borderTop: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200px',
        maxHeight: '250px'
      }}>
        {/* Messages Area */}
        <div className="video-chat-messages" style={{
          flex: 1,
          overflowY: 'auto',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxHeight: '150px'
        }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.type === 'user' ? 'user-message' : message.type === 'stranger' ? 'stranger-message' : 'system-message'}`}
              style={{
                maxWidth: '70%',
                padding: '8px 12px',
                borderRadius: '15px',
                position: 'relative',
                wordWrap: 'break-word',
                fontSize: '14px',
                alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: message.type === 'user' ? '#0073e6' : message.type === 'stranger' ? '#4a4a4a' : '#333',
                color: 'white',
                borderBottomRightRadius: message.type === 'user' ? '3px' : '15px',
                borderBottomLeftRadius: message.type === 'stranger' ? '3px' : '15px'
              }}
            >
              {message.content}
            </div>
          ))}
          
          {typingIndicator && (
            <div className="message stranger-message typing-indicator" style={{
              maxWidth: '70%',
              padding: '8px 12px',
              borderRadius: '15px',
              borderBottomLeftRadius: '3px',
              backgroundColor: '#4a4a4a',
              color: 'white',
              alignSelf: 'flex-start',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px'
            }}>
              <span>Stranger is typing</span>
              <div className="typing-dots" style={{
                display: 'flex',
                gap: '2px'
              }}>
                <div style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                  animation: 'bounce 1.4s infinite ease-in-out'
                }}></div>
                <div style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                  animation: 'bounce 1.4s infinite ease-in-out 0.16s'
                }}></div>
                <div style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                  animation: 'bounce 1.4s infinite ease-in-out 0.32s'
                }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area - Screenshot ke according bottom me */}
        <div className="video-chat-input-container" style={{
          padding: '10px 15px',
          borderTop: '1px solid #333',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          backgroundColor: '#2a2a3e'
        }}>
          <input
            type="text"
            value={messageInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: '#333',
              color: 'white',
              fontSize: '14px',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.backgroundColor = '#444'}
            onBlur={(e) => e.target.style.backgroundColor = '#333'}
          />
          
          <button
            onClick={handleSendMessage}
            style={{
              backgroundColor: '#0073e6',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            ▶
          </button>
          
          <button
            style={{
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'white',
              borderRadius: '50%'
            }}></div>
            New
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export default VideoChat