import mongoose from 'mongoose';
//const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema( 
    //definimos el esquema
   {
       userId: String,
       cost: String,
       products:{
        type:[mongoose.Types.ObjectId],
        of:Number
       }
   },
   {timestamps:true} //para saber cuando los productos fueron creaados
)

// Se utiliza el esquema UserSchema para crear un modelo llamado Transactions
const Transaction = mongoose.model('Transaction',TransactionSchema);

export default Transaction;