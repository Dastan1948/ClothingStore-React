import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { cartImg, logo } from '../assets'

const Header = () => {
	const productData = useSelector(state => state.shop.productData)
	const userInfo = useSelector(state => state.shop.userInfo)

	const navigate = useNavigate()

	return (
		<div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
			<div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
				<Link to='/'>
					<div>
						<img className='w-32' src={logo} alt='logoDark' />
					</div>
				</Link>
				<div className='flex items-center gap-8'>
					<ul className='flex items-center gap-8'>
						<li onClick={e => navigate('/')} to='/' className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Главная
						</li>
						<Link to='/clothes' className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Одежда
						</Link>
						<Link to='/sneakers' className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Обувь
						</Link>
						<Link to='/sale' className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Товары со скидкой
						</Link>
					</ul>
					<Link to='/cart'>
						<div className='relative'>
							<img className='w-6' src={cartImg} alt='cartImg' />
							<span className='absolute w-6 top-[0.4rem] left-0 text-sm flex items-center justify-center font-semibold'>
								{productData.length}
							</span>
						</div>
					</Link>
					<Link to='/login'>
						<img
							className='w-8 h-8 rounded-full'
							src={
								userInfo
									? userInfo.image
									: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&drp=1'
							}
							alt='userLogo'
						/>
					</Link>
					{userInfo && (
						<p className='text-base font-titleFont font-semibold underline underline-offset-2'>
							{userInfo.name}
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
