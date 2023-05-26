import React from 'react'

function UserInput (props) {
  return (
    <div>
      <input type='text' value={props.value} onChange={props.onInputChange} className='input-box' placeholder=':Enter your URL here'/>
    
    </div>
  )
}

export default UserInput;