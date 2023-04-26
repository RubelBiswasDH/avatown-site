import React from 'react'
import Link from 'next/link'

// Import Components
import { Typography } from 'antd'
import ProductCard from '../ProductList/ProductCard'

// Import Action and Methods
import { useAppSelector } from '@/redux/store'

// Constants
const { Text } = Typography
 
const MoreProductsSection = () => {
	const products = useAppSelector(state => state?.product?.products ?? [])

	return (
		<div style={ containerStyles }>
			<Text >{ '' }</Text>
			<div className='flex flex-wrap w-full gap-4 justify-between'>
				{ (products || [])?.slice(0, 6)?.map((d: any, idx: any) => (
					<Link href={ `/product-details/${ d?.id ?? '' }` } key={ idx }>
						<ProductCard small={ true } data={ d } />
					</Link>
				))}
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

export default MoreProductsSection