import React, { useEffect } from 'react'

// Import Components
import { Cascader, Typography } from 'antd'

// Import Action and Methods
import { setFilteredProducts, setSelectedCategoriese } from '@/redux/reducers/productReducers'
import { useAppDispatch, useAppSelector } from '@/redux/store'

// Constants
const { Text } = Typography

const categoryOptions: Option[] = [
	{
		code: 'full-avatar',
		name: 'Full Avatar',
		items: [
			{
				code: 'human-based',
				name: 'Human Based',
				items: [
					{
						code: 'male',
						name: 'Male',
					},
					{
						code: 'female',
						name: 'Female',
					}
				]
			},
			{
				code: 'animal-based',
				name: 'Animal Based',
				items: [
					{
						code: 'lion',
						name: 'Lion',
					},
					{
						code: 'tiger',
						name: 'Tiger',
					}
				]
			},
			{
				code: 'robot-based',
				name: 'Robot Based',
				items: []
			}
		]
	},
	{
		code: 'other',
		name: 'Other',
		items: []
	}
]
  
export const FilterPanel = () => {
	const dispatch = useAppDispatch()

	// Redux Data
	const products = useAppSelector(state => state?.product?.products ?? [])

	// On Cascader Value Change
	const _onChange: any = (value: string[]) => {
		dispatch( setSelectedCategoriese(value) )
		const filteredProducts = _getFilteredProductsByCategories(products, value) ?? []
		dispatch( setFilteredProducts(filteredProducts) )
	}

	// On Set Filtered Products
	const _getFilteredProductsByCategories = (products: any, categories: any) => {
		if(!products || Boolean(products?.length <= 0) ) return []
		if(!categories || Boolean(categories?.length <= 0)) return products

		let data: any = []
		const [ rootCategory, category, subCategory ] = categories

		if(rootCategory){
			data = products?.filter((d: any) => d?.root_category === rootCategory )
		}

		if(category){
			data = data?.filter((d: any) => d?.category === category )
		}

		if(subCategory){
			data = data?.filter((d: any) => d?.sub_category === subCategory )
		}

		return data
		
	}

	useEffect(() => {
		dispatch( setFilteredProducts(products) )
	}, [])

	useEffect(() => {
		dispatch( setFilteredProducts(products) )
	}, [ products ])
	
  return (
    <div style={ containerStyles }>
			<Text strong>{ 'Category' }</Text>
			<Cascader
				fieldNames={{ label: 'name', value: 'code', children: 'items' }}
				options={ categoryOptions }
				onChange={ _onChange }
				placeholder="Please select"
				style={{ width: '100%' }}
				changeOnSelect={ true }
			/>
    </div>
  )
}


// JSX Styles
const containerStyles = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column' as 'column',
	padding: '8px 8px'
}

// Interfaces
interface Option {
	code: string
	name: string
	items?: Option[]
}

export default FilterPanel