import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClothes } from '../redux/actions/fetchClothes'
import { clearClothesMenu } from '../redux/slices/fetchSlice'

const Clothes = () => {
	const { clothesMenu } = useSelector(state => state.fetch)
	const dispatch = useDispatch()

	useEffect(() => {
    window.scrollTo(0, 0)
		dispatch(fetchClothes())

    return () => {
      dispatch(clearClothesMenu())
    }
	}, [])

  return (
    <div>
      <Products products={clothesMenu} bool={true} />
    </div>
  )
}

export default Clothes