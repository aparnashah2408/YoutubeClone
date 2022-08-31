import React from 'react'
import "../Components/header.css"
import aparna from "../Images/aparnaimg.jpg"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
// import Avatar from "@mui/core/Avatar";
import logo from '../Images/youtubelogo.webp';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className='header'>
        <div className='headerleft'>
            <MenuSharpIcon />
            <img src={logo} className="logo"/>
        </div>
        <div className='headersearch'>
            <input placeholder='Search' type="text"/>
            <SearchSharpIcon className='header_inputbutton'/>
        </div>
        <div className='headericons'>
            <VideoCallSharpIcon className='header_icon'/>
            <AppsSharpIcon className='header_icon'/>
            <NotificationsSharpIcon className='header_icon'/>
            <Avatar src={aparna} className='header_icon'/>
        </div>
    </div>
  )
}

export default Header;