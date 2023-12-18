import './App.css'
import { useFadeIn } from './hooks/useFadeIn'
// import { useLeaveBeforeSave } from './hooks/useBeforeLeave'
function App() {
  const { ref, style } = useFadeIn<HTMLHeadingElement>(3)

  return (
    <>
      <h1 ref={ref} style={{ ...style }}>
        App
      </h1>
    </>
  )
}

export default App
