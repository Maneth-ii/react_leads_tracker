import React from 'react'

function Btns({onBtnClick}) {
  return (
    <div>
        <button 
        className='btn add-btn'
        onClick={onBtnClick}>
        
            Add
        </button>
       
    </div>
  )
}

export default Btns;