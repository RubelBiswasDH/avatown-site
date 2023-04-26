import React from 'react'
import Link from 'next/link'

// Import Components
import { Typography, Input, Avatar, Badge } from 'antd'

// Import Icons
import { BellFilled, ShoppingCartOutlined } from '@ant-design/icons'

// Constants
const { Text } = Typography
const { Search } = Input

const Navbar = () => {
  // On Search
	const _onSearch = (value: string) => {
		console.log(value)
	}

  return (
    <div style={ containerStyles }>
			<img style={{ maxHeight: '100%' }} src={ '/images/logo/logo_avatown_manual_1_basi_inverse.png' } alt={ 'site-logo' } />
			<Link href={ `/` }><Text underline style={ linkStyles }>{ 'Go to Marketpage' }</Text></Link>
			<div style={{ display: 'flex', maxHeight: '90%', gap: 32, padding: '0px 16px', margin: '0px 0px 0px auto' }}>
				<Search placeholder="Search" onSearch={ _onSearch } enterButton />
				<Badge count={1}>
					<Avatar shape="square" icon={<BellFilled />} />
				</Badge>
				<Badge count={1}>
					<Avatar shape="square" icon={<ShoppingCartOutlined />} />
				</Badge>
				{/* <span style={{ padding: '0px 0px', margin: '0px 0px' }}>
          <Avatar shape="circle" style={{ backgroundColor: '#1890ff' }} src="images/user-avatar.png" />
        </span> */}
			</div>		
		</div>
  )
}

// JSX Styles
const containerStyles = {
    display: 'flex',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    margin: '0px 0px',
    padding: '0px 0px',
    gap: 16,
    alignItems: 'center'
}

const linkStyles = {
    color: '#FFFFFF',
    fontFamily: "'Inter'",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "27px"
}

export default Navbar