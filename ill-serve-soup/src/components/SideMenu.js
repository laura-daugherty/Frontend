import React from 'react';

const SideMenu = (props) => {
  return(
    <div className='sidemenu-container'>
      {props.categories.map(item => <div className='sidemenu-btn' onClick={(event) => props.setFilter(event, item)} key={item} style={{background : props.searchCategory === item ? '#C3D4A0' : 'white'}}>{item.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}</div>)}
    </div>
  )
}

export default SideMenu;