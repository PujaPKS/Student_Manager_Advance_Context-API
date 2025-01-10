import React from 'react'
import './Header.css'

const Header = ({toggleForm}) => {
  return (
    <div>
        <h1>Student Manager</h1>
        <button onClick={toggleForm} className='form-btn'>Add Student</button>
    </div>
  )
}

export default Header