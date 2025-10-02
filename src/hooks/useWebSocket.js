import { useState, useRef, useCallback } from 'react'

export const useWebSocket = () => {
  const [socket, setSocket] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const socketRef = useRef(null)
  const reconnectAttemptsRef = useRef(0)
  const maxReconnectAttempts = 5

  // WebSocket server configuration (matching original)
  const WS_SERVERS = [
    `wss://${window.location.host}`,
    `wss://omegle-1-x28m.onrender.com/`
  ]
  let currentServerIndex = 0

  const connect = useCallback((chatType, interests = []) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      // Send join message if already connected
      try {
        socketRef.current.send(JSON.stringify({
          type: 'join',
          chatType,
          interests
        }))
      } catch (error) {
        console.error('Failed to send join message:', error)
      }
      return
    }

    const currentServer = WS_SERVERS[currentServerIndex]
    console.log(`Connecting to WebSocket server: ${currentServer}`)

    try {
      const ws = new WebSocket(currentServer)
      socketRef.current = ws
      setSocket(ws)

      ws.onopen = () => {
        console.log('WebSocket connection established')
        setIsConnected(true)
        reconnectAttemptsRef.current = 0

        // Send join message
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({
            type: 'join',
            chatType,
            interests
          }))
        }
      }

      ws.onclose = (event) => {
        console.log('WebSocket connection closed', event.code, event.reason)
        setIsConnected(false)

        // Try next server if current one failed
        if (event.code === 1006 && currentServerIndex < WS_SERVERS.length - 1) {
          currentServerIndex++
          setTimeout(() => connect(chatType, interests), 1000)
          return
        }

        // Reset to first server after trying all
        if (currentServerIndex >= WS_SERVERS.length - 1) {
          currentServerIndex = 0
        }

        // Attempt reconnection if under max attempts
        if (reconnectAttemptsRef.current < maxReconnectAttempts) {
          reconnectAttemptsRef.current++
          setTimeout(() => connect(chatType, interests), 2000)
        }
      }

      ws.onerror = (error) => {
        console.error('WebSocket error:', error)
      }

    } catch (error) {
      console.error('Failed to create WebSocket connection:', error)
    }
  }, [])

  const disconnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.close()
      socketRef.current = null
      setSocket(null)
      setIsConnected(false)
    }
  }, [])

  const sendMessage = useCallback((message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      try {
        socketRef.current.send(JSON.stringify({
          type: 'message',
          message
        }))
      } catch (error) {
        console.error('Failed to send message:', error)
      }
    }
  }, [])

  const sendTyping = useCallback((isTyping) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      try {
        socketRef.current.send(JSON.stringify({
          type: 'typing',
          isTyping
        }))
      } catch (error) {
        console.error('Failed to send typing status:', error)
      }
    }
  }, [])

  const sendWebRTCData = useCallback((data) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      try {
        socketRef.current.send(JSON.stringify(data))
      } catch (error) {
        console.error('Failed to send WebRTC data:', error)
      }
    }
  }, [])

  return {
    socket,
    isConnected,
    connect,
    disconnect,
    sendMessage,
    sendTyping,
    sendWebRTCData
  }
}