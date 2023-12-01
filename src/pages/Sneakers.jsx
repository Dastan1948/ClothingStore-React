import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../components/Products'
import { fetchSneakers } from '../redux/actions/fetchSneakers'
import { clearSneakersMenu } from '../redux/slices/fetchSlice'

const Sneakers = () => {
	const { sneakersMenu } = useSelector(state => state.fetch)
	const dispatch = useDispatch()

	useEffect(() => {
		window.scrollTo(0, 0)
		dispatch(fetchSneakers())

		return () => {
			dispatch(clearSneakersMenu())
		}
	}, [])

	return (
		<>
			<Products products={sneakersMenu} bool={false} />
		</>
	)
}

export default Sneakers
