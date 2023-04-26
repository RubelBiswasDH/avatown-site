import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Import Components
import { Typography, Input, Avatar, Badge } from 'antd'

// Import Icons
import { BellFilled, ShoppingCartOutlined } from '@ant-design/icons'

// Import Actions and Methods
import { useAppSelector, useAppDispatch } from '@/redux/store'
import { setMatchedProducts } from '@/redux/reducers/productReducers'

// Constants
const { Text } = Typography
const { Search } = Input

const Navbar = () => {
  const dispatch = useAppDispatch()

  // State
  const [ searchText, setSearchText ]: any = useState('')
  
  // Rudux Data
  const products: any = useAppSelector(state => state?.product?.filteredProducts ?? [])

  // Search Tasks
  const _onGetMatchProducts = (searchInput: any, products: any) => {

    if (!searchInput || searchInput?.length <= 0){
      return products
    }

    const matchedProducts = products.filter((r: any) => (
      !searchInput?.trim()?.toLowerCase() ? true
      : Object?.values({ ...r, key: '' })?.join(',')?.toLowerCase()?.includes(searchInput?.trim()?.toLowerCase()) ?? false
    ))

    return matchedProducts
  }

  // On Search
	const _onSearch = (value: string) => {
    setSearchText(value)
	}

   // On Search Text Change, Trigger onSearch when all search text is cleared by backspace button
  const _onSearchTextChange = (e: any) => {
    const value = e.target.value ?? ''
    if(!value || value?.length <= 0){
      _onSearch(value)
    }
  }

  useEffect(() => {
    const matchedProducts = _onGetMatchProducts(searchText, products)
    dispatch( setMatchedProducts(matchedProducts) )
  }, [ products, searchText ])

  return (
    <div style={ containerStyles }>
			<img style={{ maxHeight: '100%' }} src={ '/images/logo/logo_avatown_manual_1_basi_inverse.png' } alt={ 'site-logo' } />
			<Link href={ `/` }><Text underline style={ linkStyles }>{ 'Go to Marketpage' }</Text></Link>
			<div style={{ display: 'flex', maxHeight: '90%', gap: 32, padding: '0px 16px', margin: '0px 0px 0px auto' }}>
				<Search allowClear placeholder="Search" onChange={ _onSearchTextChange  } onSearch={ _onSearch } enterButton />
				<Badge count={1}>
					<Avatar shape="square" icon={<BellFilled />} />
				</Badge>
				<Badge count={1}>
					<Avatar shape="square" icon={<ShoppingCartOutlined />} />
				</Badge>
				<span style={{ padding: '0px 0px', margin: '0px 0px' }}>
        </span>
        <Badge count={0}>
          <Avatar style={{ backgroundColor: '#1890ff' }} src="images/user-avatar.png" />
				</Badge>
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