import { createSlice } from '@reduxjs/toolkit'
import { fetchClothes } from '../actions/fetchClothes'
import { fetchProducts } from '../actions/fetchProducts'
import { fetchSneakers } from '../actions/fetchSneakers'

const initialState = {
	menu: [],
	clothesMenu: [],
	sneakersMenu: [],
	status: 'loading',
}

const fetchSlice = createSlice({
	name: 'fetch',
	initialState,
	reducers: {
		clearSneakersMenu(state) {
			state.sneakersMenu = []
		},

		clearClothesMenu(state) {
			state.clothesMenu = []
		},
	},

	extraReducers: builder => {
		// Products Start
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = 'loading'
				state.menu = []
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.menu = action.payload
				state.status = 'success'
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'error'
				state.menu = []
			})

		// Products End

		// Sneakers Start
		builder
			.addCase(fetchSneakers.pending, (state, action) => {
				state.status = 'loading'
				state.sneakersMenu = []
			})
			.addCase(fetchSneakers.fulfilled, (state, action) => {
				state.sneakersMenu = action.payload
				state.status = 'success'
			})
			.addCase(fetchSneakers.rejected, (state, action) => {
				state.status = 'error'
				state.sneakersMenu = []
			})
		// Sneakers End

		// Clothes Start
		builder
			.addCase(fetchClothes.pending, (state, action) => {
				state.status = 'loading'
				state.clothesMenu = []
			})
			.addCase(fetchClothes.fulfilled, (state, action) => {
				state.clothesMenu = action.payload
				state.status = 'success'
			})
			.addCase(fetchClothes.rejected, (state, action) => {
				state.status = 'error'
				state.clothesMenu = []
			})
		// Clothes End
	},
})

export const { clearClothesMenu, clearSneakersMenu } = fetchSlice.actions

export default fetchSlice.reducer
