import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import ChatSelection from './components/ChatSelection'
import TextChat from './components/TextChat'
import VideoChat from './components/VideoChat'
import { useWebSocket } from './hooks/useWebSocket'
import { useWebRTC } from './hooks/useWebRTC'

// App states matching the original navigation
const APP_STATES = {
  HOME: 'home',
  CHAT_SELECTION: 'chat_selection',
  TEXT_CHAT: 'text_chat',
  VIDEO_CHAT: 'video_chat'
}

function App() {
  const [appState, setAppState] = useState(APP_STATES.HOME)
  const [currentChatType, setCurrentChatType] = useState(null)
  const [userCount, setUserCount] = useState(0)
  
  // WebSocket and WebRTC hooks
  const {
    socket,
    isConnected,
    connect,
    disconnect,
    sendMessage,
    sendTyping
  } = useWebSocket()
  
  const {
    localStream,
    remoteStream,
    startVideo,
    stopVideo
  } = useWebRTC(socket)

  // Navigation functions matching original script.js
  const showHomePage = () => {
    setAppState(APP_STATES.HOME)
    setCurrentChatType(null)
    disconnect()
    stopVideo()
  }

  const showChatSelection = () => {
    setAppState(APP_STATES.CHAT_SELECTION)
    setCurrentChatType(null)
    disconnect()
    stopVideo()
  }

  const startTextChat = () => {
    setAppState(APP_STATES.TEXT_CHAT)
    setCurrentChatType('text')
    connect('text')
  }

  const startVideoChat = async () => {
    setAppState(APP_STATES.VIDEO_CHAT)
    setCurrentChatType('video')
    await startVideo()
    connect('video')
  }

  const exitToSelection = () => {
    disconnect()
    stopVideo()
    showChatSelection()
  }

  // Update user count from WebSocket
  useEffect(() => {
    if (socket) {
      socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data)
        if (data.type === 'user_count') {
          setUserCount(data.count)
        }
      })
    }
  }, [socket])

  return (
    <div className="app">
      {appState === APP_STATES.HOME && (
        <HomePage onStartNow={showChatSelection} />
      )}
      
      {appState === APP_STATES.CHAT_SELECTION && (
        <ChatSelection 
          onStartTextChat={startTextChat}
          onStartVideoChat={startVideoChat}
          userCount={userCount}
        />
      )}
      
      {appState === APP_STATES.TEXT_CHAT && (
        <TextChat 
          socket={socket}
          isConnected={isConnected}
          onExit={exitToSelection}
          onSendMessage={sendMessage}
          onSendTyping={sendTyping}
          userCount={userCount}
        />
      )}
      
      {appState === APP_STATES.VIDEO_CHAT && (
        <VideoChat 
          socket={socket}
          isConnected={isConnected}
          localStream={localStream}
          remoteStream={remoteStream}
          onExit={exitToSelection}
          onSendMessage={sendMessage}
          onSendTyping={sendTyping}
          userCount={userCount}
        />
      )}
    </div>
  )
}

export default App