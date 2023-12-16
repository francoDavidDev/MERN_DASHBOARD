{data.map(
  ( _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat)=>{
  return(
    <Product  
    key={_id}
    _id ={ _id} 
    name={name} 
    description={description} 
    price={price} 
    rating={rating} 
    category={category} 
    supply={supply} 
    stat={stat} />
  )
})}

<Typography>Yearly Sales This Year: {stat.yearlySalesTotal} </Typography>
<Typography>Yearly Units Sold This Year: {stat.yearlySalesTotalSolUnits} </Typography>
