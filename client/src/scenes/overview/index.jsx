import React, { useState } from 'react'
import { FormControl, MenuItem,InputLabel, Box, Select} from '@mui/material';
import Header from '../.././components/Header';
import OverviewChart from '../../components/OverviewChart'
import { useGetSalesQuery } from '../../state/api';
import { Form } from 'react-router-dom';


const Overview = () => {

    const[view, setView] = useState()

  return (
    <Box m='1.5rem 2.5rem'>
      <Header title={'OVERVIEW'} 
      subtitle={'Overview of general revenue and profit'} />

        <Box height={'75vh'}>
            <FormControl sx={{mt:'1rem'}}>
                <InputLabel>
                View
                </InputLabel>
                <Select value={view} label='View' onChange={(e)=>setView(e.target.value)}
                >
                    <MenuItem value='sales'>Sales</MenuItem>
                    <MenuItem value='units'>Units</MenuItem>


                </Select>
            </FormControl>
            <OverviewChart view={view} />
        </Box>

    </Box>
  )
}

export default Overview
