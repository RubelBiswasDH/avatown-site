import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

// Import Components
import { Breadcrumb, Select, Pagination } from 'antd'
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
  const [ paginatedProducts, setPaginatedProducts ]: any = useState([])

  // Redux's Data
  const matchedProducts = useAppSelector(state => state?.product?.matchedProducts ?? [])
	const selectedCategoriese = useAppSelector(state => state?.product?.selectedCategories ?? [])

  const dummyData = [
    {
      avatar_image: '/images/avatar-pictures/VRC image A(F).png',
      name: 'Jinny Knixt “Avatown” -nice original avatar of Avatown',
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
      name: 'Xotic Avatar name “Avatown” -nice original avatar of Avatown',
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
      name: 'Killy “Avatown” -nice original avatar of Avatown',
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
      name: 'Lippo “Avatown” -nice original avatar of Avatown',
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
    },
    {
      avatar_image: '/images/avatar-pictures/VRC image O(F).png',
      name: 'Nina “Avatown” -nice original avatar of Avatown',
      rating: 4.0,
      rating_count: 135414,
      likes: 87,
      user_image: '/images/avatar-pictures/VRC image O(F).png',
      user_name: "Jack King",
      price: 100.00,
      type: 'Pc Only',
      note: 'Auto upload service ready, you can use this avatar within 24 hours.',
      root_category: 'full-avatar',
      category: 'human-based',
      sub_category: 'female',
      isFeatured: true,
      isNew: false
    }
  ]

  // On Sorting Value Change
  const _onSortingValueChange = (value: any) => {
    let sortedProducts: any = []
    if(!value){
      sortedProducts = matchedProducts
    }
    if(value === 'price-high-to-low'){
      sortedProducts = matchedProducts?.slice().sort((a: any, b: any) => b.price - a.price)
    }
    if(value === 'price-low-to-high'){
      sortedProducts = matchedProducts?.slice().sort((a: any, b: any) => a.price - b.price)
    }
    if(value === 'new'){
      sortedProducts = matchedProducts?.slice().sort((a: any, b: any) => a.isNew - b.isNew)
    }
    if(value === 'customer-review'){
      sortedProducts = matchedProducts?.slice().sort((a: any, b: any) => b.rating - a.rating)
    }
    if(value === 'featured'){
      sortedProducts = matchedProducts?.slice().sort((a: any, b: any) => b.isFeatured - a.isFeatured)
    }

    setSortedProducts(sortedProducts)
  }

  // On Pagination Change
  const _onPaginationChange = useCallback((page: any, pageSize: any, products: any) => {
    const start = (page-1) * pageSize
    const end = start + pageSize
    const paginatedProducts = products?.slice(start, end)
    setPaginatedProducts(paginatedProducts)
  }, [])

  useEffect(() => {
    const dummyProducts = repeatObjectsCircularly(dummyData, 5)
    dispatch( setProducts(dummyProducts) )
  }, [])

  useEffect(() => {
    setSortedProducts(matchedProducts)
  }, [ matchedProducts ])

  useEffect(() => {
    _onPaginationChange(1, 8, sortedProducts)
  }, [ sortedProducts ])

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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, width: '100%' }}>
        { (paginatedProducts || [])?.map((d: any, idx: any) => (
          <Link href={ `/product-details/${ d?.id ?? '' }` } key={ idx }>
            <ProductCard data={ d } />
          </Link>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        { Boolean(paginatedProducts?.length > 0) ? <Pagination
          size="default"
          showSizeChanger={false}
          pageSize={ 8 ?? 0}
          total={ sortedProducts?.length ?? 0 }
          onChange={ (page: any, pageSize: any) => _onPaginationChange(page, pageSize, sortedProducts) }
        /> : '' }
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