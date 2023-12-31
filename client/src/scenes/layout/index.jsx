import React,{ useState } from 'react'

import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
//import Navbar from '../../components/NavBar'
import Sidebar from '../../components/Sidebar'
import { useGetUserQuery } from '../../state/api.jsx'


const Layout = () => {

  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //obtenemos la informacion      accedemos al estado global del usuario
  const userId = useSelector( (state) => state.global.userId);

  //llamamos  la api
  const {data} = useGetUserQuery(userId)


  return (
   <Box  display={isNonMobile ? 'flex': 'block'} width='100%' height='100%'>
    <Sidebar
    user = {data || {} }
    isNonMobile = {isNonMobile}
    draweWidth = '250px'
    isSidebarOpen = {isSidebarOpen}
    setIsSidebarOpen = {setIsSidebarOpen}
    />
    <Box flexGrow={1}>
      {/*<Navbar
      user = {data || {} }
          isSidebarOpen = {isSidebarOpen}
          setIsSidebarOpen = {setIsSidebarOpen}
      />*/}
      <Outlet/>
    </Box>
   </Box>
  )
}

export default Layout
