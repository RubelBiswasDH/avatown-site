import React from 'react'

// Import Components
import { Layout } from 'antd'
import Navbar from './Topbar'

const { Header, Content } = Layout

const MainLayout = ({ children }: any) => {
	return (
		<Layout>
			<Header style={headerStyle}><Navbar /></Header>
			<Content style={contentStyle}>{ children }</Content>
		</Layout>
	)
}

// JSX Styles

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	padding: '0px 0px',
	margin: '0px 0px',
	lineHeight: '64px',
	background: 'linear-gradient(to left, #c33764 0%, #1d2671 100%)',
}
  
const contentStyle: React.CSSProperties = {
	display: 'flex',
	minHeight: 'calc(100vh - 64px)',
	color: '#fff',
	backgroundColor: '#FFF',
}

export default MainLayout