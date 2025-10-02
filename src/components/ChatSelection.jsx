import React, { useState } from 'react'

const ChatSelection = ({ onStartTextChat, onStartVideoChat, userCount }) => {
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [selectedChatType, setSelectedChatType] = useState(null)
  const [interests, setInterests] = useState('')

  const handleStartChat = (chatType) => {
    setSelectedChatType(chatType)
    setShowTermsModal(true)
  }

  const handleAgreeTerms = () => {
    setShowTermsModal(false)
    if (selectedChatType === 'text') {
      onStartTextChat()
    } else {
      onStartVideoChat()
    }
  }

  return (
    <>
      <div className="home-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        minHeight: '100vh',
        background: '#ffffff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="home-content" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '450px',
          width: '100%',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'slideUp 0.6s ease-out'
        }}>
          <div className="logo" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="logo-img" 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px'
              }} 
            />
            <span className="omegle-text" style={{
              fontSize: '2.8rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #f58220, #ff6b35)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '-1px'
            }}>
              omegle<span className="dotcom" style={{
                fontSize: '2rem',
                background: 'linear-gradient(135deg, #f58220, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>.com</span>
            </span>
          </div>

          <div className="tagline" style={{
            fontSize: '1.6rem',
            marginBottom: '30px',
            color: '#4a5568',
            fontWeight: 600,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}>Talk to strangers!</div>

          <div className="age-verification" style={{
            marginBottom: '20px',
            fontSize: '0.9rem',
            color: '#4a5568',
            background: 'linear-gradient(135deg, #fff5f5, #fed7e2)',
            padding: '16px 20px',
            borderRadius: '12px',
            borderLeft: '4px solid #f56565',
            boxShadow: '0 2px 8px rgba(245, 101, 101, 0.1)',
            fontWeight: 500,
            lineHeight: 1.5
          }}>
            <p>By using Omegle, you accept the terms at the bottom. You must be 18+ or 13+ with parental permission.</p>
          </div>

          <div className="description" style={{
            marginBottom: '30px',
            lineHeight: 1.6,
            color: '#5a6c7d',
            fontSize: '1rem',
            padding: '20px',
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
            borderRadius: '12px',
            borderLeft: '4px solid #4a90e2',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            Mobile video chat is an experimental new feature.<br/>
            Video is monitored, so keep it clean!<br/>
            Go to <a href="#" className="alt-site-link" style={{
              color: '#4a90e2',
              textDecoration: 'none',
              fontWeight: 600,
              borderBottom: '2px solid transparent'
            }}>an adult site</a> instead if that's what you want.
          </div>

          <div className="buttons" style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            marginBottom: '30px',
            justifyContent: 'center',
            flexWrap: 'nowrap'
          }}>
            <button 
              className="btn btn-primary" 
              onClick={() => handleStartChat('text')}
              style={{
                padding: '16px 32px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 700,
                minWidth: '140px',
                flex: 1,
                maxWidth: '180px',
                position: 'relative',
                overflow: 'hidden',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)'
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)'
                e.target.style.background = 'linear-gradient(135deg, #5a67d8, #6b46c1)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'
              }}
            >
              Start a chat
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => handleStartChat('video')}
              style={{
                padding: '16px 32px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: 700,
                minWidth: '140px',
                flex: 1,
                maxWidth: '180px',
                position: 'relative',
                overflow: 'hidden',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                color: 'white',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)'
                e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.6)'
                e.target.style.background = 'linear-gradient(135deg, #ff5252, #d63031)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)'
                e.target.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
              }}
            >
              Video
            </button>
          </div>

          <div className="interests-section" style={{
            marginBottom: '25px'
          }}>
            <p className="interests-label" style={{
              fontSize: '1rem',
              color: '#4a5568',
              marginBottom: '12px',
              fontWeight: 600,
              textAlign: 'center'
            }}>Meet strangers with your interests!</p>
            <div className="interests">
              <div className="interests-input-container" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%'
              }}>
                <button 
                  className="add-interests-btn"
                  style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    width: '40px',
                    height: '40px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
                    flexShrink: 0
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#5a67d8'
                    e.target.style.transform = 'scale(1.05)'
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#667eea'
                    e.target.style.transform = 'scale(1)'
                    e.target.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  +
                </button>
                <input 
                  type="text"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="Add your interests (optional)"
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    height: '40px',
                    borderRadius: '8px',
                    border: '2px solid #e2e8f0',
                    background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
                    color: '#2d3748',
                    fontSize: '0.95rem',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea'
                    e.target.style.background = '#ffffff'
                    e.target.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.15)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0'
                    e.target.style.background = 'linear-gradient(135deg, #ffffff, #f8fafc)'
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}
                />
              </div>
            </div>
          </div>

          <div className="footer" style={{
            marginTop: '30px',
            fontSize: '0.85rem',
            color: '#718096',
            lineHeight: 1.5
          }}>
            <p>Omegle is a great way to meet new friends, even while practicing social distancing.</p>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="modal" style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="modal-content" style={{
            backgroundColor: '#1a1a2e',
            padding: '30px',
            borderRadius: '10px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 5px 30px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            color: '#fff'
          }}>
            <span 
              className="modal-close" 
              onClick={() => setShowTermsModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#aaa'
              }}
              onMouseOver={(e) => e.target.style.color = '#fff'}
              onMouseOut={(e) => e.target.style.color = '#aaa'}
            >
              &times;
            </span>
            <h3 className="modal-title" style={{
              marginBottom: '20px',
              fontSize: '1.5rem',
              color: '#0073e6'
            }}>Terms and Conditions</h3>
            <p className="modal-text" style={{
              marginBottom: '20px',
              lineHeight: 1.6
            }}>
              By using this website, you agree that any actions you take during your use — including text, audio, photo, video
              communication — are solely your responsibility. Any illegal, abusive, or inappropriate activity is strictly
              prohibited. The creator or owner of this website will not be held liable for user actions.
            </p>
            <div className="modal-buttons" style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '15px'
            }}>
              <button 
                className="btn btn-primary" 
                onClick={handleAgreeTerms}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  background: '#0073e6',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = '#005bb5'}
                onMouseOut={(e) => e.target.style.background = '#0073e6'}
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatSelection