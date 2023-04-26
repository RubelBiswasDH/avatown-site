import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    filteredProducts: [],
    matchedProducts: [],
    selectedCategories: [],
    selectedProduct: null
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
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
    setMatchedProducts: (state, action) => {
      state.matchedProducts = action.payload
    }
  }
})

export const { setProducts, setFilteredProducts, setSelectedCategoriese, setSelectedProduct, setMatchedProducts } = productSlice.actions
export default productSlice.reducer