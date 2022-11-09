import React from 'react'
import './headerOption.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

export default function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser)

  return (
    <div onClick={ onClick } className='headerOption'>
      { Icon && <Icon className='headerOption__icon' /> }
      { avatar && (
        <Avatar src={user?.photoUrl} className='headerOption__icon'></Avatar>
      ) }
      <h3 className='headerOption__title'>{ title }</h3>
    </div>
  )
}