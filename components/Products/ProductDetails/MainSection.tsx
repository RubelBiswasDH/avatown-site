import React from 'react'

// Import Components
import { Typography, Button, Rate } from 'antd'

// Constants
const { Title, Text, Paragraph } = Typography

const MainSection = ({ product }: any) => {
  return (
    <div style={ containerStyles }>
        <Title level={ 3 }>{ product?.name ?? '' }</Title>
        <Text style={{ fontSize: 20 }}>{ product?.note ?? '' }</Text>
        <span>
            <Text>{ 'by -' }</Text>
            <Button type={ 'link' }>{ product?.user_name ?? '' }</Button>
        </span>
        <span>
            <Rate 
                tooltips={ [ ''+product?.rating ?? '' ] } 
                onChange={() => null} 
                value={ product?.rating } 
            />
            { product?.rating ? <span className="ant-rate-text">{ product?.rating ?? '' }</span> : ''}
            { product?.rating_count ? <span className="ant-rate-text">{ ` &  ${ product?.rating_count ?? '' }Ratings` }</span> : ''}
        </span>
        <div className={ 'bg-slate-200 p-4' }>
            <Text strong>{ 'Great Experience. Great Value' }</Text>
            <Paragraph>
                { `Elevate your online presence with this high-quality, premium avatar image. Our avatar images are designed to be eye-catching, professional, and memorable, making it easy for you to stand out from the crowd in any online setting` }
            </Paragraph>
        </div>
        <div className='w-full flex flex-col gap-4'>
            <Text strong>{ 'High-quality image: Our avatar images are created using the latest design software and techniques, ensuring a sharp and high-quality final product.' }</Text>
            <Text strong>{ 'Personalized design: Choose from a range of customizable options to create an avatar image that truly reflects your personality and style' }</Text>
            <Text strong>{ 'Multiple formats: We provide your avatar image in multiple formats including JPG, PNG, and SVG, making it easy to use across a variety of online platforms.' }</Text>
        </div>
    </div>
  )
}

// JSX Styles
const containerStyles = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: 2,
    width: '100%',
    backgroundColor: '#FFF',
    color: '#000',
}

export default MainSection