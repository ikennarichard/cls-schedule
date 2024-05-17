/* eslint-disable no-unused-vars */
import {  useContext } from 'react';
import { Students } from './components/Students';
import { ThemeContext } from './context/ThemeContext.jsx';

export default function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Students />
    </div>
  )
}