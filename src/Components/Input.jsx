import { useRef } from 'react'
import '../App.css'

function Input({ modes, setInput }) {

  const inputRef = useRef(null)

  return (
    <div className="input_wrap">
      <select ref={inputRef} name='mode' className='input'>
        <option value='0'>Pick mode:</option>
        {
          Object.entries(modes).map((el, index) => {
            return <option key={index} value={el[1].field}>{el[0]}</option>
          })
        }
      </select>
      <button className='btn' type='submit' onClick={() => setInput(Number(inputRef.current.value))}>START</button>
    </div>
  )
}

export default Input