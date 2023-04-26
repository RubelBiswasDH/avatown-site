import React from 'react'
// Import Components
import { Image, Typography, Rate, Button, Avatar, Tooltip, Breadcrumb } from 'antd'

// Import Icons
import { HeartOutlined, UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons'

// Constants
const { Text, Paragraph } = Typography

const ProductCard = ({ data, onAddToCartButtonClick, small }: any ) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: small ? '160px' : '258px', position: 'relative' }}>
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
      <Image style={{ borderRadius: '8px' }} width={ small ? 160 : 258 } height={ small ? 160 : 258 } src={ data?.avatar_image ?? '' } alt={ 'image-avatar' } preview={ false } />
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
      <div style={{ padding: '0px 0px', textAlign: 'right' }}>
        <Text>{ '$ ' }</Text>
        <Text style={{ fontSize: small ? '16px' : '28px' }}>{ data?.price ?? '' }</Text>
      </div>
      { !Boolean(small) ? <>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0px 0px' }}>
          <Avatar size={ 16 } style={{ backgroundColor: '#3CD4F5' }} />
          <Text>{ data?.type ?? '' }</Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0px 0px' }}>
          <Paragraph>{ data?.note ?? '' }</Paragraph>
          <Button type={ 'link' } icon={ <UploadOutlined /> } />
        </div>
      </> : '' }
    </div>
  )
}

export default ProductCard