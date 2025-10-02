import { useState, useRef, useCallback, useEffect } from 'react'

export const useWebRTC = (socket) => {
  const [localStream, setLocalStream] = useState(null)
  const [remoteStream, setRemoteStream] = useState(null)
  const peerConnectionRef = useRef(null)
  const localStreamRef = useRef(null)
  const remoteStreamRef = useRef(null)
  const iceCandidateQueue = useRef([])
  const isInitiatorRef = useRef(false)
  const isRemoteDescriptionSetRef = useRef(false)

  // ICE servers configuration (matching original)
  const ICE_SERVERS = [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    {
      urls: 'turn:openrelay.metered.ca:80',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    },
    {
      urls: 'turn:openrelay.metered.ca:443',
      username: 'openrelayproject',
      credential: 'openrelayproject'
    }
  ]

  // Initialize peer connection
  const createPeerConnection = useCallback(() => {
    try {
      const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS })
      
      pc.onicecandidate = (event) => {
        if (event.candidate && socket) {
          socket.send(JSON.stringify({
            type: 'webrtc_ice_candidate',
            candidate: event.candidate
          }))
        }
      }

      pc.ontrack = (event) => {
        const [stream] = event.streams
        setRemoteStream(stream)
        remoteStreamRef.current = stream
      }

      pc.onconnectionstatechange = () => {
        console.log('Peer connection state:', pc.connectionState)
      }

      peerConnectionRef.current = pc
      return pc
    } catch (error) {
      console.error('Failed to create peer connection:', error)
      return null
    }
  }, [socket])

  // Start video (get user media and set up peer connection)
  const startVideo = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })
      
      setLocalStream(stream)
      localStreamRef.current = stream

      // Create peer connection if not exists
      if (!peerConnectionRef.current) {
        createPeerConnection()
      }

      // Add tracks to peer connection
      if (peerConnectionRef.current) {
        stream.getTracks().forEach(track => {
          peerConnectionRef.current.addTrack(track, stream)
        })
      }

      return true
    } catch (error) {
      console.error('Failed to get user media:', error)
      return false
    }
  }, [createPeerConnection])

  // Stop video
  const stopVideo = useCallback(() => {
    // Stop local stream
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop())
      localStreamRef.current = null
      setLocalStream(null)
    }

    // Stop remote stream
    if (remoteStreamRef.current) {
      remoteStreamRef.current.getTracks().forEach(track => track.stop())
      remoteStreamRef.current = null
      setRemoteStream(null)
    }

    // Close peer connection
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close()
      peerConnectionRef.current = null
    }

    // Reset state
    iceCandidateQueue.current = []
    isInitiatorRef.current = false
    isRemoteDescriptionSetRef.current = false
  }, [])

  // Create and send offer
  const createOffer = useCallback(async () => {
    if (!peerConnectionRef.current) return

    try {
      isInitiatorRef.current = true
      const offer = await peerConnectionRef.current.createOffer()
      await peerConnectionRef.current.setLocalDescription(offer)
      
      if (socket) {
        socket.send(JSON.stringify({
          type: 'webrtc_offer',
          offer
        }))
      }
    } catch (error) {
      console.error('Failed to create offer:', error)
    }
  }, [socket])

  // Handle incoming offer
  const handleOffer = useCallback(async (offer) => {
    if (!peerConnectionRef.current) {
      createPeerConnection()
    }

    try {
      await peerConnectionRef.current.setRemoteDescription(offer)
      isRemoteDescriptionSetRef.current = true

      // Process queued ICE candidates
      while (iceCandidateQueue.current.length > 0) {
        const candidate = iceCandidateQueue.current.shift()
        await peerConnectionRef.current.addIceCandidate(candidate)
      }

      // Create answer
      const answer = await peerConnectionRef.current.createAnswer()
      await peerConnectionRef.current.setLocalDescription(answer)
      
      if (socket) {
        socket.send(JSON.stringify({
          type: 'webrtc_answer',
          answer
        }))
      }
    } catch (error) {
      console.error('Failed to handle offer:', error)
    }
  }, [socket, createPeerConnection])

  // Handle incoming answer
  const handleAnswer = useCallback(async (answer) => {
    if (!peerConnectionRef.current) return

    try {
      await peerConnectionRef.current.setRemoteDescription(answer)
      isRemoteDescriptionSetRef.current = true

      // Process queued ICE candidates
      while (iceCandidateQueue.current.length > 0) {
        const candidate = iceCandidateQueue.current.shift()
        await peerConnectionRef.current.addIceCandidate(candidate)
      }
    } catch (error) {
      console.error('Failed to handle answer:', error)
    }
  }, [])

  // Handle incoming ICE candidate
  const handleIceCandidate = useCallback(async (candidate) => {
    if (!peerConnectionRef.current) return

    try {
      if (isRemoteDescriptionSetRef.current) {
        await peerConnectionRef.current.addIceCandidate(candidate)
      } else {
        // Queue ICE candidate until remote description is set
        iceCandidateQueue.current.push(candidate)
      }
    } catch (error) {
      console.error('Failed to handle ICE candidate:', error)
    }
  }, [])

  // Listen to WebSocket messages for WebRTC signaling
  useEffect(() => {
    if (socket) {
      const handleMessage = (event) => {
        const data = JSON.parse(event.data)
        
        switch (data.type) {
          case 'webrtc_offer':
            handleOffer(data.offer)
            break
          case 'webrtc_answer':
            handleAnswer(data.answer)
            break
          case 'webrtc_ice_candidate':
            handleIceCandidate(data.candidate)
            break
          case 'stranger_connected':
            // If we're in video chat and stranger connects, create offer
            if (localStreamRef.current && !isInitiatorRef.current) {
              setTimeout(createOffer, 1000)
            }
            break
        }
      }

      socket.addEventListener('message', handleMessage)
      return () => socket.removeEventListener('message', handleMessage)
    }
  }, [socket, handleOffer, handleAnswer, handleIceCandidate, createOffer])

  return {
    localStream,
    remoteStream,
    startVideo,
    stopVideo,
    createOffer
  }
}