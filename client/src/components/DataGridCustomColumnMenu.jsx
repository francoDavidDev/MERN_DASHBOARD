import { GridColumnMenuContainer,

HideGridColMenuItem } from '@mui/x-data-grid-pro';

import {GridFilterMenuItem}  from '@mui/x-data-grid-pro';


import React from 'react'

const CustomColumnMenu = (props) => {
    
  const{hideMenu,currentColumn, open} = props;
  return (
    <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
    >   
        <GridFilterMenuItem  onclick={hideMenu} column={currentColumn} />
        <HideGridColMenuItem onclick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  )
}

export default CustomColumnMenu
