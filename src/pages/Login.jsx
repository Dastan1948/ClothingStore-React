import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { googleLogo } from '../assets'
import { addUser, removeUser } from '../redux/slices/shopSlice'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const auth = getAuth()
	const provider = new GoogleAuthProvider()

	const handleGoogleLogin = e => {
		e.preventDefault()
		signInWithPopup(auth, provider)
			.then(res => {
				const user = res.user
				dispatch(
					addUser({
						_id: user.uid,
						name: user.displayName,
						email: user.email,
						image: user.photoURL,
					})
				)
				setTimeout(() => {
					navigate('/')
				}, 1500)
			})
			.catch(error => {
				console.log(error)
			})
	}

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				toast.success('Вы успешно вышли из аккаунта')
				dispatch(removeUser())
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
			{/* Google */}
			<div className='w-full flex items-center justify-center gap-10'>
				<div
					onClick={handleGoogleLogin}
					className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300 '
				>
					<img className='w-8' src={googleLogo} alt='googleLogo' />
					<span className='text-sm text-gray-900'>Sign in with Google</span>
				</div>
				<button
					onClick={handleSignOut}
					className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'
				>
					Sign Out
				</button>
			</div>

			<ToastContainer
				position='top-left'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</div>
	)
}

export default Login
