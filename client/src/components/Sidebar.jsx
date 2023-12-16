import React from 'react'
import { Box,Divider,Drawer,IconButton,List,ListItem, ListItemButton,ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'

import { ChevronLeft,ChevronRightOutlined, Settings, SettingsOutlined} from '@mui/icons-material'

import { useEffect,useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import profileImage from '../assets/profile.jpeg'

import { NAV_ITEMS } from '../constants'


const Sidebar = ({isNonMobile,isSidebarOpen,setIsSidebarOpen,draweWidth,user}) => {

    const {pathname} = useLocation();
    const [active, setActive] = useState('');
    const navigate = useNavigate();
    const theme = useTheme(); 

    

    useEffect(()=>{
        setActive(pathname.substring(1));
    },[pathname])


  return (
    <Box component='nav' >
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose = {()=>setIsSidebarOpen(false)}
          variant='persistent'
          anchor = 'left'
          sx={{
            width:draweWidth,
            '& . MuiDrawer-paper':{
              color:theme.palette.background.alt,
              boxSizing:'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              widtd: draweWidth,
              transitionDuration: 4.,
            },
            ml:1
          }}
        >
        <Box width='100%'>
          <Box  margin='1.5rem 2rem 2rem 3rem'>
            <FlexBetween color={theme.palette.secondary.main}> 
                <Box display='flex' alignItems='center' gap='0.5rem'>
                  <Typography variant='h4' fontWeight='bold'>
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)} >
                    <ChevronLeft/>
                  </IconButton>
                )}
            </FlexBetween>
          </Box>
              
                    <List>
                      {NAV_ITEMS.map((item)=>{
                        if(!item.icon){
                          return(
                            <Typography key={item.text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                              {item.text}
                            
                            </Typography>
                          )
                        }
                        const lcText = item.text.toLowerCase();

                        return(
                          <ListItem key={item.text} disablePadding >
                            <ListItemButton
                              onClick={()=> {
                              navigate(`${lcText}`);
                              setActive(lcText)
                            }}
                            sx={{ backgroundColor: active === lcText ? theme.palette.secondary[300]: 'transparent',
                            color:active === lcText ? theme.palette.primary[600]: theme.palette.secondary[200]
                          }}
                            >
                                <ListItemIcon
                                sx={{ml:'2rem',
                              color:active === lcText ? theme.palette.primary[600]: theme.palette.secondary[200] }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                                {active === lcText && (
                                  <ChevronRightOutlined sx={{ml:'auto'}} />
                                ) }
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
            </Box> 
            <Box marginBottom='1rem'>
            <Divider/>
            <FlexBetween textTransform='none' gap='1rem' m='1.5rem 2rem 0 3rem'>
              <Box
              component='img'
              alt='profile'
              src={profileImage}
              height='40px'
              width='40px'
              borderRadius='50%'
              sx={{objectFit:'cover'}}
              />
                <Box textAlign='left'>
                    <Typography fontWeight='bold' fontSize='0.9rem' sx={{color:theme.palette.secondary[100]}} >
                      {user.name}
                    </Typography>
                    <Typography  fontSize='0.8rem' sx={{color:theme.palette.secondary[200]}} >
                      {user.occupation}
                    </Typography>
                </Box>
                <IconButton>
                  <SettingsOutlined
                  sx={{color:theme.palette.secondary[300], fontSize:'25px'}} 
                  />
                  </IconButton>
                      
                 
                      
            </FlexBetween>  
              </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default Sidebar
