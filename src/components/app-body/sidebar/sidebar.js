import React from 'react'
import { Avatar } from '@material-ui/core'
import './sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'

export default function Sidebar() {

  const user = useSelector(selectUser)

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{ topic }</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://cdn-www.comingsoon.net/assets/uploads/2022/02/Dragon-Ball-Super-Super-Hero-Trunks-Goten-1.jpeg" alt="" />
        <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,563</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,221</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('ReactJS')}
        {recentItem('Programming')}
        {recentItem('NextJS')}
        {recentItem('TailwindCSS')}
        {recentItem('AppDevelopment')}
      </div>
    </div>
  )
}
