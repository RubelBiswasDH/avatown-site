import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    filteredProducts: [],
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
    }
  }
})

export const { setProducts, setFilteredProducts, setSelectedCategoriese, setSelectedProduct } = productSlice.actions
export default productSlice.reducer