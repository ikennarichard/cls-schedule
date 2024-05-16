/* eslint-disable no-unused-vars */
import {  useContext } from 'react'
import { Students } from './components/Students';
import { ThemeContext } from './context/ThemeContext.jsx';

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Students />
    </div>
  )
}

export default App
