import React from 'react'

const HomePage = ({ onStartNow }) => {
  return (
    <div id="homePage" style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      backgroundColor: '#f8f9fa',
      margin: 0,
      padding: 0,
      width: '100vw',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Header Section */}
      <header style={{
        background: 'transparent',
        padding: '15px 20px',
        borderBottom: 'none',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <img src="/logo.png" alt="Omegle Logo" style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <span style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #f58220, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                fontFamily: 'Arial, sans-serif'
              }}>
                omegle<span style={{
                  color: '#666',
                  fontWeight: 'normal',
                  fontSize: '1.4rem'
                }}>.com</span>
              </span>
              <span style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#333',
                fontStyle: 'italic',
                marginTop: '2px'
              }}>Talk to strangers!</span>
            </div>
          </div>
        </div>
      </header>
      
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <section className="hero">
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#333'
          }}>Talk to strangers!</h1>

          <div className="intro-section" style={{
            background: '#ffffff',
            padding: '35px',
            borderRadius: '25px',
            marginBottom: '35px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: '1px solid #ddd'
          }}>
            <h2 style={{
              fontSize: '36px',
              marginBottom: '30px',
              color: '#333',
              textAlign: 'center',
              borderBottom: '4px solid #FF6B35',
              paddingBottom: '20px',
              fontWeight: 'bold'
            }}>👋 Welcome to the New Era! 🚀</h2>

            <div style={{
              background: '#ffffff',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '25px',
              borderLeft: '8px solid #FF6B35',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <p style={{
                marginBottom: 0,
                fontSize: '18px',
                lineHeight: 1.8,
                color: '#333',
                fontWeight: 600
              }}>
                Missing Omegle? Same here! When the original Omegle went offline, we felt that loss too. So we decided to build something better! 💪
              </p>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '30px',
              borderRadius: '20px',
              textAlign: 'center',
              borderLeft: '8px solid #28a745',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '22px',
                color: '#333',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                fontWeight: 'bold'
              }}>
                ✨ <span>Welcome to Omegle Web</span>
              </h3>
              <p style={{
                marginBottom: 0,
                fontSize: '18px',
                lineHeight: 1.8,
                color: '#333',
                fontWeight: 600
              }}>
                A modern, safer, and friendlier alternative to the original Omegle! 🌟 Built by students, for everyone.
              </p>
            </div>
          </div>

          <div className="main-cta" style={{
            textAlign: 'center',
            margin: '50px 0'
          }}>
            <button 
              className="start-btn" 
              onClick={onStartNow}
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                color: 'white',
                border: 'none',
                padding: '20px 60px',
                fontSize: '24px',
                fontWeight: 'bold',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 25px rgba(255, 107, 53, 0.4)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 20px rgba(255, 107, 53, 0.3)'
              }}
            >
              Start Now
            </button>
          </div>

          <div className="how-to-use" style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            marginBottom: '30px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '24px',
              marginBottom: '20px',
              color: '#333'
            }}>How to use Omegle?</h2>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{
                marginBottom: '12px',
                fontSize: '16px',
                lineHeight: 1.5
              }}>1. Go to the website 🌐</li>
              <li style={{
                marginBottom: '12px',
                fontSize: '16px',
                lineHeight: 1.5
              }}>2. Choose Text chat 💬 or Video chat 📹</li>
              <li style={{
                marginBottom: '12px',
                fontSize: '16px',
                lineHeight: 1.5
              }}>3. (Optional) Add your interests 🏀🎵</li>
              <li style={{
                marginBottom: '12px',
                fontSize: '16px',
                lineHeight: 1.5
              }}>4. Click Start to match with a stranger 🤝</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage