import React from 'react'

// Import Components
import { Image, Divider, Typography, Avatar, Button, Tooltip } from 'antd'

// Constants
const { Text, Paragraph } = Typography

const LeftSection = ({ product }: any) => {

  return (
    <div style={ containerStyles }>
      	<Image style={{ borderRadius: 8 }} src={ product?.avatar_image ?? '' } alt={ 'product-thumbnai' } />
		<div style={{ display: 'flex', gap: 4, width: '100%' }}>
			<Image width={ '25%' } style={{ borderRadius: 8 }} src={ product?.avatar_image ?? '' } alt={ 'product-thumbnai' } />
			<Image width={ '25%' } style={{ borderRadius: 8 }} src={ product?.avatar_image ?? '' } alt={ 'product-thumbnai' } />
		</div>
		<Paragraph className='text-lime-900 text-justify'>
			{ `Lorem ipsum, dolor sit amet consectetua deleniti cupidtia distinc que consects inventore animi, voluptas laudantium eos amet, dolor minus.` }
		</Paragraph>
		<Divider style={{ margin: '2px 2px' }}/>
		<Text strong >{ 'Follow' }</Text>
		<UserCard image={ product?.user_image } name={ product?.user_name } onFollow={ () => null } />
		<UserCard image={ product?.user_image } name={ product?.user_name } onFollow={ () => null } />
    </div>
  )
}

// Mini Component
const UserCard = ({ image, name, onFollow }: any) => {
	return (
		<div style={{ display: 'flex', gap: 12, width: '100%' }}>
			<Avatar size={ 'large' } src={ image ?? '' } />
			<Button type={ 'link' }>{ name ?? '' }</Button>
			<Tooltip title={ 'Explore this user' }>
				<Button onClick={ onFollow }>{ 'Follow' }</Button>
			</Tooltip>
		</div>
	)
}

// JSX
const containerStyles = {
    display: 'flex',
	flexDirection: 'column' as 'column',
	gap: 8,
    width: '100%',
    backgroundColor: '#FFF',
    color: '#000',
}

export default LeftSection