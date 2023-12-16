import mongoose from 'mongoose';
//const mongoose = require('mongoose')

const ProductStatSchema= new mongoose.Schema( 
    //definimos el esquema
   {    
        productId:String,
        yearlySalesTotal:Number,
        yearlySalesTotalSolUnits:Number,
        year:Number,
        monthlyData:[
            {
                month: String,
                totalSales:Number,
                totalUnits:Number
            }
        ],
        dailyData: [
            {
            date:String,
            totalSales:Number,
            totalUnits:Number
        }
        ],
     
   },
   {timestamps:true} //para saber cuando los productos fueron creaados
)

// Se utili,za el esquema UserSchema para crear un modelo llamado User
const ProductStat = mongoose.model('ProductStat',ProductStatSchema);

export default ProductStat;