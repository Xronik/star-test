import { useState, useEffect, useContext } from 'react'
import Context from '../Context'


function Cell({ column, row, index }) {

  const [color, setColor] = useState(true)
  const context = useContext(Context)

  let colorStyles = {
    backgroundColor: color ? 'white' : 'deepskyblue'
  }

  const addPosititonToList = () => {
    context.setHoverSquares((hoverSquares) => [...hoverSquares, [index, column, row]])
  }

  const removePositionFromList = () => {
    context.setHoverSquares((hoverSquares) => hoverSquares.filter((el) => el[0] !== index))
  }

  useEffect(() => {
    setColor(true)
  }, [context.input])

  return (
    <div style={colorStyles} className='cell' onMouseEnter={() => {
      (color) ? addPosititonToList() : removePositionFromList();
      setColor(!color);
    }}></div >
  )
}

export default Cell
