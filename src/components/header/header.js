import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import NotificationsIcon from '@material-ui/icons/Notifications'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import { logout, selectUser } from '../../features/userSlice'
import HeaderOption from './headerOption'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'

export default function Header() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/2504/2504923.png'
          alt='LinkedIn'
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' name='' id='' />
        </div>
      </div>
      <div className='header__right'>
        < HeaderOption Icon={ HomeIcon } title='Home' />
        < HeaderOption Icon={ SupervisorAccountIcon } title='My Network' />
        < HeaderOption Icon={ BusinessCenterIcon } title='Jobs' />
        < HeaderOption Icon={ ChatIcon } title='Messaging' />
        < HeaderOption Icon={ NotificationsIcon } title='Notifications' />
        < HeaderOption avatar={true} title='Profile' onClick={logoutOfApp} />
      </div>
    </div>
  )
}