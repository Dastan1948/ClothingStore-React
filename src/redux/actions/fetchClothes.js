import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchClothes = createAsyncThunk(
	'fetch/fetchClothesStatus',
	async props => {
		const data = await axios.get(`https://65662c16eb8bb4b70ef2feae.mockapi.io/products`)

		return data.data
	}
)