import './App.css';
import Input from './Components/Input';
import List from './Components/List';
import Field from './Components/Field'
import Context from './Context'
import React, { useState, useEffect } from 'react'

export const AppContext = React.createContext()

function App() {

  const [modes, setModes] = useState(0)
  const [input, setInput] = useState(0)
  const [hoverSquares, setHoverSquares] = useState([])

  const value = {
    input,
    setHoverSquares
  }

  useEffect(() => {
    fetch('http://demo1030918.mockable.io/').then((res) => res.json()).then((data) => setModes(data))
    setHoverSquares([])
  }, [input])

  return (
    <Context.Provider value={value}>
      <div className="app">
        <div className='main_wrap'>
          <Input setInput={setInput} modes={modes} />
          <Field input={input} />
        </div>
        <List className='list' hoverSquares={hoverSquares} />
      </div>
    </Context.Provider>
  );
}

export default App;