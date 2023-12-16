//Nav Items Sidebar
import {HomeOutlined,ShoppingCartRounded,ReceiptLongOutlined,PublicOutlined,PointOfSaleOutlined, TodayOutlined,  AdminPanelSettingsOutlined,TrendingUpOutlined,PieChartOutline, Groups2Outlined, CalendarMonthOutlined } from '@mui/icons-material'


export const NAV_ITEMS = [
    {
      text: 'Dashboard',
      icon: <HomeOutlined/>,
    },
    {
      text: 'Client Facing',
      icon: null,
    },
    {
      text: 'Products',
      icon: <ShoppingCartRounded/>,
    },
    {
      text: 'Customers',
      icon: <Groups2Outlined/>,
    },
    {
      text: 'Transactions',
      icon: <ReceiptLongOutlined/>,
    },
    {
      text: 'Geography',
      icon: <PublicOutlined/>,
    },
    {
      text: 'Overview',
      icon: <PointOfSaleOutlined/>,
    },
    {
      text: 'Daily',
      icon: <TodayOutlined/>,
    },
    {
      text: 'Monthly',
      icon: <CalendarMonthOutlined/>,
    },
    {
      text: 'Breakdown',
      icon: <PieChartOutline/>,
    },
    {
      text: 'Management',
      icon: null,
    },
  
    {
      text: 'Admin',
      icon: <AdminPanelSettingsOutlined/>,
    },
    {
      text: 'Performance',
      icon: <TrendingUpOutlined/>,
    },
  ]