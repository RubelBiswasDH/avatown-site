import React from 'react'

// Import Components
import { Row, Col } from 'antd'

const ProductList = () => {
  return (
    <div style={ containerStyles }>
      <Row style={{ width: '100%' }} gutter={[ 8, 8 ]}>
        <Col span={ 24 }>
          Product Details
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