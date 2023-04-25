import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    filteredProducts: [],
    selectedCategories: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setFilteredProducts: (state, action) => {
        state.filteredProducts = action.payload
    },
    setSelectedCategoriese: (state, action) => {
        state.selectedCategories = action.payload
    }
  }
})

export const { setProducts, setFilteredProducts, setSelectedCategoriese } = productSlice.actions
export default productSlice.reducer