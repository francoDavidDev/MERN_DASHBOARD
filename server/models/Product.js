import mongoose from 'mongoose';
//const mongoose = require('mongoose')

const ProductSchema= new mongoose.Schema( 
    //definimos el esquema
   {
        name:String,
        price:String,
        description:String,
        category:String,
        rating: Number,
        supply: Number
   },
   {timestamps:true} //para saber cuando los productos fueron creaados
)

// Se utiliza el esquema UserSchema para crear un modelo llamado User
const Product = mongoose.model('Product',ProductSchema);

export default Product;