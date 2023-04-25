import React from 'react'

// Import Components
import { Row, Col } from 'antd'
import FilterPanel from './FilterPanel'
import Products from './Products'

const ProductList = () => {
  return (
    <div style={ containerStyles }>
        <Row style={{ width: '100%' }} gutter={[ 8, 8 ]}>
            <Col span={ 4 }>
                <FilterPanel />
            </Col>
            <Col span={ 20 }>
                <Products />
            </Col>
        </Row>
    </div>
  )
}

// JSX Styles
const containerStyles = {
    display: 'flex',
    width: '100%',
    backgroundColor: '#FFF',
    color: '#000'
}

export default ProductList