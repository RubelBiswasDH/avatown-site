import React from 'react'

// Import Components
import { Cascader, Typography } from 'antd'

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
  
const _onChange: any = (value: string[]) => {
	console.log(value)
}
  
export const FilterPanel = () => {
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