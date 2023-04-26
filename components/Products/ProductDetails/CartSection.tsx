import React from 'react'

// Import Component
import { Button, Divider, Typography } from 'antd'

// Const
const { Text } = Typography

const CartSection = ({ product }: any) => {
  return (
    <div style={ containerStyles }>
        <div className={ 'flex flex-col shadow-md p-4 gap-4' }>
            <div className='w-full flex flex-col align-bottom'>
                <span className='w-full flex justify-between'>
                    <Text strong>{ 'Original Price' }</Text>
                    <Text className={ 'text-red-400 text-right' }>{ '$19.97' }</Text>
                </span>
                <Text className={ 'text-black text-right' }>{ 'List Price: $29.00' }</Text>
                <Text className={ 'text-black text-right' }>{ 'Save: $9.03 (31%)' }</Text>
            </div>
            <Text>usantium, porro iste quibusdam quis fvident molestias quidem quas sit ipsum modi quaerat nostrum, velit beatae debitis.</Text>
            <div className={ 'flex flex-col gap-2' }>
                <Button className={ 'w-full bg-cyan-600 rounded-full text-neutral-50' }>{ 'Add to Cart' }</Button>
                <Button className={ 'w-full bg-amber-500 rounded-full text-neutral-50' }>{ 'Buy Now' }</Button>
            </div>
            <div className={ 'flex flex-col gap-0' }>
                <Infoz label={ 'Payment' } value={ 'Secure transaction' } />
                <Infoz label={ 'Sold By' } value={ 'John Dixio' } />
                <Infoz label={ 'Date' } value={ '12-10-2023 10:32 PM' } />
            </div>
            <Divider className='m-0' />
            <Button type={ 'link' } className={ 'text-xs text-sky-800 w-16 p-0' }>{ 'Apply Coupon' }</Button>
        </div>
    </div>
  )
}

// Mini Component
const Infoz = ({ label, value }: any) => {
  return (
    <div className={ 'flex flex-row gap-2 justify-between' }>
        <Text>{ label ?? '' }</Text>
        <Text className={ 'text-sky-700' }>{ value ?? '' }</Text>
    </div>
  )
}


// JSX Styles
const containerStyles = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: 0,
    width: '100%',
    backgroundColor: '#FFF',
    color: '#000',
}

export default CartSection