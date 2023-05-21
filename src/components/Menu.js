import React from 'react'

function Menu(props) {
  return (
    <div className='menu-container'>
        <img src={props.menuIcon} href='' />
        <p>{props.menuName}</p>
    </div>
  )
}

export default Menu