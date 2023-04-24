import React from 'react'

// Import Components
import ProductList from '@/components/Products/ProductList'

export default function Home() {
  return (
    <div style={ containerStyles }>
      <ProductList />
    </div>
  )
}

// JSX Styles
const containerStyles = {
  display: 'flex',
  minHeight: '100%',
  width: '100%',
  backgroundColor: '#FFF'
}
