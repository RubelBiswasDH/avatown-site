import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// Import Components
import { Row, Col } from 'antd'
import ProductDetailsComponent from '@/components/Products/ProductDetails'

// Import Actions & Methods
import { useAppSelector, useAppDispatch } from '@/redux/store'
import { setSelectedProduct } from '@/redux/reducers/productReducers'

const ProductDetails: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  // Rudux
  const products: any = useAppSelector(state => state?.product?.products ?? [])

  // URL Params
  const selectedId = router?.query?.product ?? null

  useEffect(() => { 
    if(selectedId){
      const data = products?.find((p: any) => p?.id === Number(selectedId))
      if(data){
        dispatch( setSelectedProduct(data) )
      }
    }
  }, [ selectedId ])

  return (
    <>
      <Row style={{ width: '100%', overflow: 'auto' }}>
        <Col span={ 24 }>
          <ProductDetailsComponent />
        </Col>
      </Row>
    </>
  )
}

export default ProductDetails