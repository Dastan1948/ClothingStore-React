import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
	'fetch/fetchProductsStatus',
	async props => {
		const data = await axios.get(`https://65662c16eb8bb4b70ef2feae.mockapi.io/products?page=1&limit=4`)

		return data.data
	}
)