import React, { useEffect } from 'react'

// Import Components
import { Breadcrumb } from 'antd'
import ProductCard from './ProductCard'

// Import Actions and Methods
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setProducts } from '@/redux/reducers/productReducers'
import { repeatObjectsCircularly, formatString } from '@/utils/utils'

const Products = () => {
  const dispatch = useAppDispatch()

  // Redux's Data
  const filteredProducts = useAppSelector(state => state?.product?.filteredProducts ?? [])
	const selectedCategoriese = useAppSelector(state => state?.product?.selectedCategories ?? [])

  const dummyData = [
    {
      avatar_image: '/images/avatar-pictures/VRC image A(F).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.3,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image A(F).png',
      user_name: "Avatar Joe's",
      price: 500.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'female'
    },
    {
      avatar_image: '/images/avatar-pictures/VRC image E(M).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.3,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image E(M).png',
      user_name: "Avatar Joe's",
      price: 500.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'male'
    },
    {
      avatar_image: '/images/avatar-pictures/VRC image B(F).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.3,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image B(F).png',
      user_name: "Avatar Joe's",
      price: 500.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'female'
    },
    {
      avatar_image: '/images/avatar-pictures/VRC image C(M).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.3,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image E(M).png',
      user_name: "Avatar Joe's",
      price: 500.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'male'
    }
  ]

  useEffect(() => {
    const dummyProducts = repeatObjectsCircularly(dummyData, 5)
    dispatch( setProducts(dummyProducts) )
  }, [])

  return (
    <div style={ containerStyles }>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '8px 0px', width: '100%' }}>
      <Breadcrumb
        items={
          selectedCategoriese?.map((c: string) => ({
            title: c ? formatString(c) : ''
          }))
        }
      />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, width: '100%' }}>
        { filteredProducts?.map((d: any, idx: any) => (
          <ProductCard key={ idx } data={ d } />
        ))}
      </div>
    </div>
  )
}

// JSX Styles
const containerStyles = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    padding: '8px 8px'
}

export default Products