import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Cell from './Cell'

function Field({ input }) {

  const [numberOfCells, setNumberOfCells] = useState(0)
  const fieldRef = useRef('')

  const getSquareForm = (data) => {
    fieldRef.current.style.gridTemplateColumns = `repeat(${data},41px)`
    fieldRef.current.style.gridTemplateRows = `repeat(${data},41px)`
  }

  const setColumn = (index) => {
    let column = Math.ceil((index + 1) / input)
    return column
  }

  const setRow = (index) => {
    let row = ((index) % input) + 1
    return row
  }

  useEffect(() => {
    getSquareForm(input)
    setNumberOfCells(input * input)
  }, [input])

  return (
    <div className='field' ref={fieldRef}>
      {
        Array(numberOfCells).fill('').map((el, i) =>
          <Cell key={i} column={setColumn(i)} row={setRow(i)} index={i} />)
      }
    </div >
  )
}

export default Field