import React ,{useState}from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Header from '../.././components/Header';
import { useGetTransactionsQuery } from '../../state/api';
import { useTheme } from '@emotion/react';
import { Box,Toolbar } from '@mui/material';
import DataGridCustomToolbar from '../.././components/DataGridCustomToolbar';



const Transactions = () => {
   
    const theme = useTheme();
    //values to be sent to the backend

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState('');


    const [searchInput,setSearchInput]= useState('');
    const {data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize, 
        sort:JSON.stringify(sort),
        search,
    })

    const columns=[
        {
            field:'_id',
            headerName :'ID',
            flex:1,
          },
          {
            field:'userId',
            headerName :'User ID',
            flex:1,
          },
          {
            field:'createdAt',
            headerName :'CreateAt',
            flex:1,
          }, 
          {
            field:'products',
            headerName :'# of Products',
            flex:0.5,
            sortabe:false,
            renderCell:(params)=>params.value.length
          },
          {
            field:'cost',
            headerName :'Cost',
            flex:1,
            renderCell:(params)=>`$${Number(params.value).toFixed(2)}`
          },
    ]

  return (
    <Box m='1.5rem 1.5rem' >
      <Header title={'TRANSACTIONS'} subtitle={'Entre list of transactions'} />
        <Box height={'80vh'} 
         sx={{
            '& .MuiDataGrid-root':{
              border:'none'
            },
            '& .MuiDataGrid-cell':{
              borderBottom:'none'
            },
            '& .MuiDataGrid-ColumnHeaders':{
              backgroundColor:theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom:'none'
            },
            '& .MuiDataGrid-virtualScroller':{
              backgroundColor:theme.palette.primary.light,
            },
            '& .MuiDataGrid-footerContainer':{
              backgroundColor:theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop:'none'
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text':{
              color:`${theme.palette.secondary[200]} !important`,
            }
  
          }}
        >
            <DataGrid 
            loading ={isLoading || !data}
            getRowId={(row)=> row._id}
            rows = {(data && data.transactions) || [] }
            columns = {columns}
            rowCount={(data && data.total) || 0 }
            rowsPerPageOptions={[20,50,100]}
            pagination
            page = {page}
            pageSize = {pageSize}
            paginationMode='server'
            sortingMode='server'
            onPageChange = {(newPage)=> setPage(newPage)}
            onPageSizeChange = {(newPageSize)=> setPageSize(newPageSize)}
            onSortModelChange={(newSortModel)=> setSort(...newSortModel)}
            slots={{ toolbar: DataGridCustomToolbar}}
            slotProps={{
                toolbar:{searchInput,setSearchInput, setSearch}
            }}
            
            />
        </Box>
    </Box>
  )
}

export default Transactions
