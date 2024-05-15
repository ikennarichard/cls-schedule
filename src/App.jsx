/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, useContext } from 'react'
import Greeting from './components/Greeting';
import { DummyJson } from './components/DummyJson';
import { Form } from './components/Form';
import { Students } from './components/Students';
import { ThemeContext } from './context/ThemeContext.jsx';

function App() {
  // const [count, setCount] = useState(0);
  // const divElement = useRef();

  // useEffect(() => {
  //   console.log('The height of the element is', divElement.current.offsetHeight);
  // }, []);
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      {
        /* <Greeting/>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <div ref={divElement}>Flexisaf</div>
          <Form/>
          <DummyJson/>
        </div> */
      }
      <Students />
    </div>
  )
}

export default App
