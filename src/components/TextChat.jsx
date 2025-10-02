import React, { useState, useEffect, useRef } from 'react'

const TextChat = ({ socket, isConnected, onExit, onSendMessage, onSendTyping, userCount }) => {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  const [typingIndicator, setTypingIndicator] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
    <div className="chat-container" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#ffffff',
      color: '#000'
    }}>
      {/* Header */}
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
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
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

      {/* Messages */}
      <div className="chat-messages" style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '80px 15px 80px',
        margin: '60px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'contain',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position'
      }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'user' ? 'user-message' : message.type === 'stranger' ? 'stranger-message' : 'system-message'}`}
            style={{
              maxWidth: '70%',
              padding: '12px 15px',
              borderRadius: '18px',
              position: 'relative',
              wordWrap: 'break-word',
              animation: 'fadeIn 0.3s ease',
              alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: message.type === 'user' ? '#0073e6' : message.type === 'stranger' ? '#e0e0e0' : '#f0f0f0',
              color: message.type === 'user' ? 'white' : '#333',
              borderBottomRightRadius: message.type === 'user' ? '5px' : '18px',
              borderBottomLeftRadius: message.type === 'stranger' ? '5px' : '18px'
            }}
          >
            {message.content}
          </div>
        ))}
        
        {typingIndicator && (
          <div className="message stranger-message typing-indicator" style={{
            maxWidth: '70%',
            padding: '12px 15px',
            borderRadius: '18px',
            borderBottomLeftRadius: '5px',
            backgroundColor: '#e0e0e0',
            color: '#333',
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>Stranger is typing</span>
            <div className="typing-dots" style={{
              display: 'flex',
              gap: '2px'
            }}>
              <div style={{
                width: '4px',
                height: '4px',
                backgroundColor: '#666',
                borderRadius: '50%',
                animation: 'bounce 1.4s infinite ease-in-out'
              }}></div>
              <div style={{
                width: '4px',
                height: '4px',
                backgroundColor: '#666',
                borderRadius: '50%',
                animation: 'bounce 1.4s infinite ease-in-out 0.16s'
              }}></div>
              <div style={{
                width: '4px',
                height: '4px',
                backgroundColor: '#666',
                borderRadius: '50%',
                animation: 'bounce 1.4s infinite ease-in-out 0.32s'
              }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-container" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '15px',
        backgroundColor: '#1a1a2e',
        borderTop: '1px solid #333',
        zIndex: 1000,
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
        <input
          type="text"
          value={messageInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="chat-input"
          style={{
            flex: 1,
            minWidth: 0,
            padding: '12px 15px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#333',
            color: 'white',
            fontSize: '1rem',
            flexShrink: 1,
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.backgroundColor = '#444'}
          onBlur={(e) => e.target.style.backgroundColor = '#333'}
        />
        <button
          onClick={handleSendMessage}
          className="send-btn"
          style={{
            backgroundColor: '#0073e6',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            flexShrink: 0
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#005bb5'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0073e6'}
        >
          ▶
        </button>
        <button
          className="connect-btn"
          style={{
            backgroundColor: isConnected ? '#ff4444' : '#0073e6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '10px',
            width: 'auto',
            minWidth: '80px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem',
            flexShrink: 0
          }}
        >
          <div
            className="connect-icon"
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'white'
            }}
          ></div>
          New
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
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

export default TextChat