import mongoose from 'mongoose';
//const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema( 
    //definimos el esquema
    {
        name:{
            type:String,
            required:true,
            min:2,
            max:100
        },
        email:{
            type: String,
            required: true,
            min:50,
            max:100,
            unique:true
        },
        password:{
            type: String,
            required: true,
            min: 5,
        },
        city:String,
        state: String,
        country: String,
        occupation:String,
        phoneNumber: String,
        transactions: Array,
        role:{
            type:String,
            enum: ['user', 'admin','superadmin'],
            default: 'admin'
        }
    }
)

// Se utiliza el esquema UserSchema para crear un modelo llamado User
const User = mongoose.model('User',UserSchema);

export default User;