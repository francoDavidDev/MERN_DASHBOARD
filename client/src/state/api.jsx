import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
//creamos una Api con redux


// Crear una instancia de la API utilizando createApi
export const api = createApi({
    // Configuración de la consulta base utilizando fetchBaseQuery
    baseQuery: fetchBaseQuery({baseUrl: 'https://admin-backend-bs1y.onrender.com'}),
    // Nombre del slice de Redux que se creará para almacenar los resultados de la API
    reducerPath:'adminApi',
     // Definir tipos de etiquetas que se usarán para gestionar el estado de la caché
    tagTypes:['User', 'Products','Transactions','Geography','Sales','Admins','Performance','Dashboard'],
  // Definir los endpoints que se pueden llamar en la API
    endpoints:(build)=>({
        // Definir un endpoint llamado 'getUser' usando build.query
        getUser: build.query({
            // Definir la función de consulta que toma un parámetro 'id'
            query:(id)=> `/general/user/${id}`,
            providesTags: ['User']
        }),
        getProducts: build.query({
            query:()=>`client/products`,
            providesTags:['Products'],
        }),
        getCustomers:build.query({
            query:()=>`client/customers`,
            providesTags:['Customers']
        }),
        getTransactions:build.query({
            query:({page,pageSize, sort, search})=>({
                url:`client/transactions`,
                method:'GET',
                params:{page,pageSize, sort, search},
            }),
            providesTags:['Transactions']
        }),
        getGeography:build.query({
            query:()=>'client/geography',
            providesTags:['Geography']
        }),
        getSales:build.query({
            query:()=>'sales/sales',
            providesTags:['Sales']
        }),
        getAdmins: build.query({
            query:()=>`management/admins`,
            providesTags:['Admins']
        }),
        getUserPerformance: build.query({
            query:(id)=>`management/performance/${id}`,
            providesTags:['Performance']
        }),
        getDashboard : build.query({
            query:()=>'general/dashboard',
            providesTags:['Dashboard']
        }),
    })
})

export const {useGetUserQuery, 
    useGetProductsQuery, 
    useGetCustomersQuery, 
    useGetTransactionsQuery, 
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery,
} = api;