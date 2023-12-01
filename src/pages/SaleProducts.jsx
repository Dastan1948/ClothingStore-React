import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { loadingImg } from '../assets'
import ProductsCard from '../components/ProductsCard'
import { fetchClothes } from '../redux/actions/fetchClothes'
import { fetchSneakers } from '../redux/actions/fetchSneakers'

const SaleProducts = () => {
	const { status, clothesMenu, sneakersMenu } = useSelector(
		state => state.fetch
	)

	const dispatch = useDispatch()

	useEffect(() => {
		window.scrollTo(0, 0)
		dispatch(fetchClothes())
		dispatch(fetchSneakers())
	}, [])

	return (
		<div className='py-10'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
					Товары со скидкой
				</h1>
				<span className='w-20 h-[3px] bg-black'></span>
			</div>
			{status === 'error' ? (
				<div className='text-center mt-3 font-titleFont'>
					<h2>
						Произошла ошибка <span>😕</span>
					</h2>
					<p>
						К сожалению, не удалось получить Товары. Попробуйте повторить
						попытку позже
					</p>
				</div>
			) : (
				<>
					{status === 'loading' ? (
						<>
							<div className='w-[170px] mx-auto flex items-center'>
								<img src={loadingImg} alt='loadingImg' />
								Загрузка...
							</div>
						</>
					) : (
						<>
							<div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
								{clothesMenu
									.filter(item => item.isNew != false)
									.map(item => (
										<ProductsCard key={item._id} product={item} bool={true} />
									))}
								{sneakersMenu
									.filter(item => item.isNew != false)
									.map(item => (
										<ProductsCard key={item._id} product={item} bool={false} />
									))}
							</div>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default SaleProducts
