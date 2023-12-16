import mongoose from 'mongoose';
//const mongoose = require('mongoose')

const AffiliateStatSchema= new mongoose.Schema( 
    //definimos el esquema
   {
        userId: { type: mongoose.Types.ObjectId, ref :'User'},
        affiliateSales:{
            type:[mongoose.Types.ObjectId],
            ref: 'Transaction',
        },
   },
   {timestamps:true} //para saber cuando los productos fueron creaados
)

// Se utiliza el esquema UserSchema para crear un modelo llamado User
const AffiliateStat = mongoose.model('AffiliateStat',AffiliateStatSchema);

export default AffiliateStat;