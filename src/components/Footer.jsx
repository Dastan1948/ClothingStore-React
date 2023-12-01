import React from 'react'
import { BsPaypal, BsPersonFill } from 'react-icons/bs'
import {
	FaFacebookF,
	FaHome,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { MdLocationOn } from 'react-icons/md'
import { logo, paymentLogo } from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='bg-black text-[#949494] py-20 font-titleFont'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-4'>
				{/* Logo */}
				<div className='flex flex-col gap-7'>
					<img className='w-32 bg-transparent' src={logo} alt='logoLight' />
					<p className='text-white text-sm tracking-wide'>Интернет магазин</p>
					<img src={paymentLogo} alt='paymentLogo' className='w-16' />
					<div className='flex gap-5 text-lg text-gray-400'>
						<ImGithub className='hover:text-white duration-300 cursor-pointer' />
						<FaYoutube className='hover:text-white duration-300 cursor-pointer' />
						<FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
						<FaTwitter className='hover:text-white duration-300 cursor-pointer' />
						<FaInstagram className='hover:text-white duration-300 cursor-pointer' />
					</div>
				</div>

				{/* LocateUs */}
				<div>
					<h2 className='text-2xl text-white mb-4'>Локация</h2>
					<div className='text-base flex flex-col gap-2'>
						<p>Bishkek</p>
						<p>Mobile: 996700123123</p>
						<p>Phone: 996777777777</p>
						<p>e-mail: dastan@gmail.com</p>
					</div>
				</div>

				{/* Profile */}
				<div>
					<h2 className='text-2xl text-white mb-4'>Профиль</h2>
					<div className='flex flex-col gap-2 text-base'>
						<Link to='/login' className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
							<span className='text-lg'>
								<BsPersonFill />
							</span>
							my account
						</Link>
						<p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
							<span className='text-lg'>
								<BsPaypal />
							</span>
							checkout
						</p>
						<p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
							<span className='text-lg'>
								<FaHome />
							</span>
							order tracking
						</p>
						<p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
							<span className='text-lg'>
								<MdLocationOn />
							</span>
							help & support
						</p>
					</div>
				</div>

				{/* Subscribe */}
				<div className='flex flex-col justify-center'>
					<input
						type='text'
						className='bg-transparent border px-4 py-2 text-sm'
						placeholder='e-mail'
					/>
					<button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
						подписаться
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
