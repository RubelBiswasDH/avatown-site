import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Import Components
import { Breadcrumb, Select } from 'antd'
import ProductCard from './ProductCard'

// Import Actions and Methods
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setProducts } from '@/redux/reducers/productReducers'
import { repeatObjectsCircularly, formatString } from '@/utils/utils'

const sortingOptions = [
  { value: 'featured', label: 'Featured', key: 1 },
  { value: 'price-low-to-high', label: 'Price: Low to High', key: 2 },
  { value: 'price-high-to-low', label: 'Price: High to Low', key: 3 },
  { value: 'customer-review', label: 'Customer Review', key: 4 },
  { value: 'new', label: 'New', key: 5 },
]

const Products = () => {
  const dispatch = useAppDispatch()
  
  // States
  const [ sortedProducts, setSortedProducts ]: any = useState([])

  // Redux's Data
  const filteredProducts = useAppSelector(state => state?.product?.filteredProducts ?? [])
	const selectedCategoriese = useAppSelector(state => state?.product?.selectedCategories ?? [])

  const dummyData = [
    {
      avatar_image: '/images/avatar-pictures/VRC image A(F).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.0,
      rating_count: 774444,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image A(F).png',
      user_name: "Avatar Joe",
      price: 600.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'female',
      isFeatured: true,
      isNew: false
    },
    {
      avatar_image: '/images/avatar-pictures/VRC image E(M).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.3,
      rating_count: 334444,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image E(M).png',
      user_name: "Avatar Joe",
      price: 760.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'male',
      isFeatured: true,
      isNew: false
    },
    {
      avatar_image: '/images/avatar-pictures/VRC image B(F).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.9,
      rating_count: 134414,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image B(F).png',
      user_name: "Avatar Joe",
      price: 300.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'female',
      isFeatured: false,
      isNew: true
    },
    {
      avatar_image: '/images/avatar-pictures/VRC image C(M).png',
      name: 'Avatar name “Avatown” -nice original avatar of Avatown',
      rating: 4.5,
      rating_count: 235414,
      likes: 33,
      user_image: '/images/avatar-pictures/VRC image E(M).png',
      user_name: "Avatar Joe",
      price: 400.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'male',
      isFeatured: true,
      isNew: true
    }
  ]

  // On Sorting Value Change
  const _onSortingValueChange = (value: any) => {
    let sortedProducts: any = []
    if(!value){
      sortedProducts = filteredProducts
    }
    if(value === 'price-high-to-low'){
      sortedProducts = filteredProducts?.slice().sort((a: any, b: any) => b.price - a.price)
    }
    if(value === 'price-low-to-high'){
      sortedProducts = filteredProducts?.slice().sort((a: any, b: any) => a.price - b.price)
    }
    if(value === 'new'){
      sortedProducts = filteredProducts?.slice().sort((a: any, b: any) => a.isNew - b.isNew)
    }
    if(value === 'customer-review'){
      sortedProducts = filteredProducts?.slice().sort((a: any, b: any) => b.rating - a.rating)
    }
    if(value === 'featured'){
      sortedProducts = filteredProducts?.slice().sort((a: any, b: any) => b.isFeatured - a.isFeatured)
    }

    setSortedProducts(sortedProducts)
  }

  useEffect(() => {
    const dummyProducts = repeatObjectsCircularly(dummyData, 5)
    dispatch( setProducts(dummyProducts) )
  }, [])

  useEffect(() => {
    setSortedProducts(filteredProducts)
  }, [ filteredProducts ])

  return (
    <div style={ containerStyles }>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, padding: '8px 0px', width: '100%' }}>
        <Breadcrumb
          items={
            (selectedCategoriese && selectedCategoriese?.length >0) 
              ? selectedCategoriese?.map((c: string) => ({
                title: c ? formatString(c) : ''
              })) 
              : 
              [ { title: 'All Items' } ]
          }
        />
        <Select
          size={ 'small' }
          options={ sortingOptions }
          style={{ width: '320px' }}
          onChange={ _onSortingValueChange }
          placeholder={ 'Sort' }
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, width: '100%' }}>
        { (sortedProducts || [])?.map((d: any, idx: any) => (
          <Link href={ `/product-details/${ d?.id ?? '' }` } key={ idx }>
            <ProductCard data={ d } />
          </Link>
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