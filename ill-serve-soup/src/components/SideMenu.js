import React from 'react';

const SideMenu = (props) => {
  return(
    <div className='sidemenu-container'>
      {props.categories.map(item => <div onClick={(event) => props.setFilter(event, item)} key={item}>{item.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}</div>)}
    </div>
  )
}

export default SideMenu;