import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { fetchProducts } from '../redux/actions/fetchProducts'

const Home = () => {
	const { menu } = useSelector(state => state.fetch)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		window.scrollTo(0, 0)
		dispatch(fetchProducts())
	}, [])

	return (
		<div>
			<Banner />
			<Products products={menu} bool={true} />
			<div className='max-w-[200px] mx-auto mb-6'>
				<button
					onClick={e => navigate('/clothes')}
					className='border border-solid border-gray-600 bg-orange-500/75 rounded-lg px-4 py-2 text-center hover:bg-orange-400/70 hover:text-white'
				>
					Показать еще товары
				</button>
			</div>
		</div>
	)
}

export default Home
