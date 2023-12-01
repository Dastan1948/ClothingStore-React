import React from 'react'
import { useSelector } from 'react-redux'
import { loadingImg } from '../assets'
import ProductsCard from './ProductsCard'

const Products = ({ products, bool }) => {
	const { status } = useSelector(state => state.fetch)

	return (
		<div className='py-10'>
			<div className='flex flex-col items-center gap-4'>
				<h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
				Шоппинг каждый день
				</h1>
				<span className='w-20 h-[3px] bg-black'></span>
				<p className='max-w-[700px] text-gray-600 text-center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
					magnam. Odio labore dolorum libero. Neque iusto ab labore cum, quia
					necessitatibus nesciunt ullam vero perspiciatis tenetur hic dolor
					quisquam odit ex dolore nihil assumenda nobis ipsam laboriosam,
					dignissimos incidunt excepturi?
				</p>
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
								{products.map(item => (
									<ProductsCard key={item._id} product={item} bool={bool} />
								))}
							</div>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default Products
