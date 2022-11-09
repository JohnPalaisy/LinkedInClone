import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './login.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword( email, password )
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoUrl
      }))
    }).catch((error) => alert(error))
  }

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic
        }))
      })
    }).catch(error => alert(error))
  }

  return (
    <div className='login'>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" 
        alt="LinkedIn" 
      />
      <form >
        <input
         value={ name }
         onChange={(e) => setName(e.target.value)}
         placeholder='Full Name (required to register)' 
         type="text"
        />
        <input
         value={ profilePic }
         onChange={(e) => setProfilePic(e.target.value)} 
         placeholder='Profile Picture URL (Optional)' 
         type="text" 
        />
        <input
         value={ email } 
         onChange={(e) => setEmail(e.target.value)} 
         placeholder='Email' 
         type="email" 
        />
        <input
         value={ password } 
         onChange={(e) => setPassword(e.target.value)}
         placeholder='Password' 
         type="password" 
        />
        <button 
          type='submit' 
          onClick={loginToApp}
        >
          Sign In
        </button>
      </form>
      <p>Not a member?
        <span className='login__register' onClick={register}> Register Now</span>
      </p>
    </div>
  )
}