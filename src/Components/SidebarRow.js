import React from 'react'
import "../Components/sidebarRow.css"

function SidebarRow({Icon,title}) {
  return (
    <div className='sidebarRow'>
        <Icon className="sidebarRow_icon"/>
        <h2 className='sidebarRowTitle'>{title}</h2>
    </div>
  )
}

export default SidebarRow