import React from 'react'

// Import Components
import { Row, Col, Breadcrumb, Divider } from 'antd'
import LeftSection from './LeftSection'
import MainSection from './MainSection'
import CartSection from './CartSection'
import MoreProductsSection from './MoreProductsSection'

// Import Actions and Methods
import { useAppSelector } from '@/redux/store'
import { formatString } from '@/utils/utils'

const ProductDetails = () => {
  const product: any = useAppSelector(state => state?.product?.selectedProduct ?? null)
  return (
    <div style={ containerStyles }>
      <Row style={{ width: '100%' }} gutter={[ 32, 16 ]}>
        <Col span={ 24 }>
          { product
            ? 
            <Breadcrumb
              items={
                [
                  { title: product?.root_category ? formatString(product?.root_category)  : '' },
                  { title: product?.category ? formatString(product?.category)  : '' },
                  { title: product?.sub_category ? formatString(product?.sub_category)  : '' }
                ]
              }
            />
            :
            ''
          }
        </Col>
        <Col span={ 6 }>
          <LeftSection product={ product } />
        </Col>
        <Col span={ 12 }>
          <MainSection product={ product } />
        </Col>
        <Col span={ 6 }>
          <CartSection product={ product } />
        </Col>
        <Divider />
        <Col span={ 24 }>
          <MoreProductsSection />
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
  color: '#000',
  padding: '16px 32px'
}

export default ProductDetails