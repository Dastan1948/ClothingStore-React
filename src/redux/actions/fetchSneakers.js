import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSneakers = createAsyncThunk(
	'fetch/fetchSneakersStatus',
	async props => {
		const data = await axios.get(`https://64e0c6ba50713530432caae7.mockapi.io/sneakers`)

		return data.data
	}
)