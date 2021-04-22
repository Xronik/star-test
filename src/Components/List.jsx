import '../App.css'

function List({ hoverSquares }) {
  return (
    <div className='list'>
      <span className='list_title'>Hover squares</span>
      <div className='list_wrap'>
        {
          hoverSquares?.map((el, i) => {
            return <span key={i}> row:{el[1]} col:{el[2]} </span>
          })
        }
      </div>
    </div>
  )
}

export default List
