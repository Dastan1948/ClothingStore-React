import React, { useEffect, useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { banner1, banner2, banner3, banner4 } from '../assets'

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [number, setNumber] = useState(0)

	const data = [banner1, banner2, banner3, banner4]

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 3 : prev => prev - 1)
	}

	const nextSlide = () => {
		setCurrentSlide(currentSlide === 3 ? 0 : prev => prev + 1)
	}

	return (
		<div className='w-full h-auto overflow-x-hidden'>
			<div className='w-screen h-[640px] relative'>
				<div
					style={{
						transform: `translateX(-${currentSlide * 100}vw)`,
					}}
					className='w-[400vw] h-full flex transition-transform duration-1000'
				>
					<img
						className='w-screen h-full object-cover'
						src={data[0]}
						alt='ImgOne'
						loading='priority'
					/>
					<img
						className='w-screen h-full object-cover'
						src={data[1]}
						alt='ImgTwo'
						loading='priority'
					/>
					<img
						className='w-screen h-full object-cover'
						src={data[2]}
						alt='ImgThree'
						loading='priority'
					/>
					<img
						className='w-screen h-full object-cover'
						src={data[3]}
						alt='ImgFour'
						loading='priority'
					/>
				</div>
				<div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
					<div
						onClick={prevSlide}
						className='w-14 h-12 border-[1px] border-gray-788 flex items-center justify-center hover:cursor-pointer 	hover:bg-gray-700 hover: text-white active: bg-gray-900 duration-300'
					>
						<HiArrowLeft />
					</div>
					<div
						onClick={nextSlide}
						className='w-14 h-12 border-[1px] border-gray-788 flex items-center justify-center hover:cursor-pointer 	hover:bg-gray-700 hover: text-white active: bg-gray-900 duration-300'
					>
						<HiArrowRight />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
