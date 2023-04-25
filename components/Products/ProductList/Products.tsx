import React, { useEffect } from 'react'

// Import Components
import { Image, Typography, Rate, Button, Avatar, Tooltip, Row, Col } from 'antd'

// Import Icons
import { HeartOutlined, UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons'

// Import Actions and Methods
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setProducts } from '@/redux/reducers/productReducers'
import { repeatObjectsCircularly } from '@/utils/utils'

// Constants
const { Text, Paragraph } = Typography

const ProductCard = ({ data, onAddToCartButtonClick }: any ) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '258px', position: 'relative' }}>
      <Tooltip title="Add to cart">
        <Button 
          style={{ backgroundColor: 'blue', display: 'flex', alignItems: 'center', position: 'absolute', right: 4, top: 4, zIndex: 100 }} 
          size={ 'small' } 
          type={ 'primary' } 
          icon={ <ShoppingCartOutlined /> }
        >
          { 'Add' }
        </Button>
      </Tooltip>
      <Image style={{ borderRadius: '8px' }} width={ 258 } height={ 258 } src={ data?.avatar_image ?? '' } alt={ 'image-avatar' } preview={ false } />
      <Text strong>{ data?.name ?? '' }</Text>
      <span>
        <Rate 
          tooltips={ [ ''+data?.rating ?? '' ] } 
          onChange={() => null} 
          value={ data.rating } 
        />
        { data.rating ? <span className="ant-rate-text">{ data?.rating ?? '' }</span> : ''}
        { data.likes ? <span className="ant-rate-text">{ ` & ${ data?.likes ?? '' }Likes` }</span> : ''}
        <Button type={ 'link' } icon={ <HeartOutlined /> } />
      </span>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Avatar src={ '/images/user-avatar.png' } style={{ backgroundColor: '#f56a00' }} />
        <Text>{ data?.user_name ?? '' }</Text>
      </div>
      <div style={{ padding: '0px 0px' }}>
        <Text>{ '$ ' }</Text>
        <Text style={{ fontSize: '28px', lineHeight: '28px' }}>{ data?.price ?? '' }</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0px 0px' }}>
        <Avatar size={ 16 } style={{ backgroundColor: '#3CD4F5' }} />
        <Text>{ data?.type ?? '' }</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0px 0px' }}>
        <Paragraph>{ data?.note ?? '' }</Paragraph>
        <Button type={ 'link' } icon={ <UploadOutlined /> } />
      </div>
    </div>
  )
}
const Products = () => {
  const dispatch = useAppDispatch()

  // Redux's Data
  const products = useAppSelector(state => state?.product?.products ?? [])

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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
        { products?.map((d: any, idx: any) => (
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
    padding: '8px 8px'
}

const priceTextStyles = {
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "32px",
  lineHeight: "30px",
  color: "#000000"
}

export default Products