import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/app-body/sidebar/sidebar';
import Feed from './components/app-body/feed/feed'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './login';
import { auth } from './firebase';
import Widgets from './components/app-body/widgets/widget';

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				//user is logged in
				dispatch(login({
					email: userAuth.email,
					uid: userAuth.uid,
					displayName: userAuth.displayName,
					photoURL: userAuth.photoURL,
				}))
			} else {
				// user is logged out
				dispatch(logout())
			}
		})
	}, [])

	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}
		</div>
	);
}

export default App;
