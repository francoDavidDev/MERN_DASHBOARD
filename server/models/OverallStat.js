import mongoose from 'mongoose';
//const mongoose = require('mongoose')

const OverallStatSchema= new mongoose.Schema( 
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
        dailyData: 
           [ {
            date:String,
            totalSales:Number,
            totalUnits:Number
        },
     
    ],
    salesByCategory:{
        type:Map, 
        of: Number
    }
   },
   {timestamps:true} //para saber cuando los productos fueron creaados
)

// Se utiliza el esquema UserSchema para crear un modelo llamado User
const OverallStat = mongoose.model('OverallStat',OverallStatSchema);

export default OverallStat;