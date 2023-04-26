import React, { useEffect } from 'react'

// Import Components
import { Cascader, Typography, Space, Checkbox } from 'antd'

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
		<div>
			<Text strong>{ 'Category' }</Text>
			<Cascader
				fieldNames={{ label: 'name', value: 'code', children: 'items' }}
				size={ 'small' }
				options={ categoryOptions }
				onChange={ _onChange }
				placeholder="Please select"
				style={{ width: '100%', paddingLeft: 12 }}
				changeOnSelect={ true }
			/>
		</div>
		<div style={ checkboxContainerStyles }>
			<Text strong>{ 'Contents' }</Text>
			<Checkbox.Group style={{ paddingLeft: 12 }}>
				<Space direction="vertical">
					<Checkbox value={1}>{ 'VRChat(Quest)' }</Checkbox>
					<Checkbox value={2}>{ 'VRChat(PCVR)' }</Checkbox>
					<Checkbox value={3}>{ 'Others' }</Checkbox>
				</Space>
			</Checkbox.Group>
		</div>
		<div style={ checkboxContainerStyles }>
			<Text strong>{ 'Price' }</Text>
			<Checkbox.Group  style={{ paddingLeft: 12 }}>
				<Space direction="vertical">
					<Checkbox value={1}>{ 'Under $10' }</Checkbox>
					<Checkbox value={2}>{ '$10 to $20' }</Checkbox>
					<Checkbox value={3}>{ '$20 to $30' }</Checkbox>
					<Checkbox value={4}>{ '$30 to $40' }</Checkbox>
					<Checkbox value={5}>{ '$40 to $50' }</Checkbox>
					<Checkbox value={6}>{ '$50 to $60' }</Checkbox>
					<Checkbox value={7}>{ '$70 & above' }</Checkbox>
				</Space>
			</Checkbox.Group>
		</div>
		<div style={ checkboxContainerStyles }>
			<Text strong>{ 'Price' }</Text>
			<Checkbox.Group  style={{ paddingLeft: 12 }}>
				<Space direction="vertical">
					<Checkbox value={1}>{ `Under △7,500` }</Checkbox>
					<Checkbox value={2}>{ `△7,500 to △10,000` }</Checkbox>
					<Checkbox value={3}>{ `△10,000 to △15,000` }</Checkbox>
					<Checkbox value={4}>{ `△15,000 to △20,000` }</Checkbox>
					<Checkbox value={5}>{ `△20,000 to △32,000` }</Checkbox>
					<Checkbox value={6}>{ `△32,000 to △70,000` }</Checkbox>
					<Checkbox value={7}>{ `△70,000 & Above` }</Checkbox>
				</Space>
			</Checkbox.Group>
		</div>
		<div style={ checkboxContainerStyles }>
			<Text strong>{ 'Auto upload support' }</Text>
			<Checkbox.Group style={{ paddingLeft: 12 }}>
				<Space direction="vertical">
					<Checkbox value={1}>{ 'Supported' }</Checkbox>
					<Checkbox value={2}>{ 'Unsupported' }</Checkbox>
				</Space>
			</Checkbox.Group>
		</div>
    </div>
  )
}


// JSX Styles
const containerStyles = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column' as 'column',
	padding: '8px 8px',
	gap: 8
}

const checkboxContainerStyles = {
	display: 'flex',
	flexDirection: 'column' as 'column',
	gap: 0
}

// Interfaces
interface Option {
	code: string
	name: string
	items?: Option[]
}

export default FilterPanel