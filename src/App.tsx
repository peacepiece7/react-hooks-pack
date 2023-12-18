import './App.css'
import { useFadeIn } from './hooks/useFadeIn'
import { useFullscreen } from './hooks/useFullscreen'
import { useNetwork } from './hooks/useNetwork'
import { useNotification } from './hooks/useNotification'
import { useScroll } from './hooks/useScroll'
// import { useLeaveBeforeSave } from './hooks/useBeforeLeave'
function App() {
  const { ref, style } = useFadeIn<HTMLHeadingElement>(3)
  const isOnline = useNetwork()
  const pos = useScroll()
  console.log(pos)
  const {
    ref: screenRef,
    exitFull,
    triggerFull,
    isFull,
  } = useFullscreen<HTMLDivElement>()
  const { fireNotif } = useNotification('Hello', {
    body: 'Hi',
    badge: './vite.svg',
    vibrate: [100, 200, 300],
  })

  return (
    <div style={{ height: '1000dvh' }}>
      <h1 ref={ref} style={{ ...style }}>
        {isOnline ? 'Online' : 'Offline'}
      </h1>
      <div ref={screenRef}>
        <img
          style={isFull ? { width: '90%', height: '90%' } : {}}
          src="./vite.svg"
          alt="vite"
        />
        <button onClick={triggerFull}>Expand image</button>
        <button onClick={exitFull}>Exit Fullscreen image</button>
        <button onClick={() => fireNotif()}>Notification</button>
      </div>
    </div>
  )
}

export default App
