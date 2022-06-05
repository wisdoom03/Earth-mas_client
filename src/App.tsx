import { Global } from '@emotion/react'
import { globalStyles } from './styles/GlobalStyles'
import './App.css'

function App() {
  return (
    <>
      <Global styles={globalStyles} />
    </>
  )
}

export default App
