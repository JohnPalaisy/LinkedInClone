import React, { forwardRef } from 'react'
import './post.css'
import { Avatar } from '@material-ui/core'
import InputOption from '../inputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import SharedOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/ShareOutlined'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{ name }</h2>
          <p>{ description }</p>
        </div>
      </div>
      <div className="post__body">
        <p>{ message }</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ ThumbUpAltOutlinedIcon } title='Like' />
        <InputOption Icon={ ChatOutlinedIcon } title='Comment' />
        <InputOption Icon={ SharedOutlinedIcon } title='Share' />
        <InputOption Icon={ SendOutlinedIcon } title='Send' />
        
      </div>
    </div>
  )
})

export default Post
