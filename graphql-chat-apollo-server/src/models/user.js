import mongoose  from 'mongoose';
import user from '../typeDefs/user';
let Schema = mongoose.Schema;
import { hash } from 'bcryptjs';

//unique validator
import uniqueValidator from 'mongoose-unique-validator';

//create new model with the same properties in TypeDefs (graphql schema)
let userSchema = new Schema({
    email: {
        type: String,
        unique: true, //unique validator

        //another way 
        // validate:{
        //     validator: email => User.doesnotExist({email}),
        //     message: ({value}) => `Email ${value} has already exist`
        // }
        
        
    },
    username: {
        type: String,
        unique: true
    },
    name: String,
    password: String
},
{
    // replacement for createAt or updateAt property.
    timestamps: true
})

userSchema.pre('save', async function(){
    if(this.isModified('password')){
         this.password =  await hash(this.password, 9)
    }
})

//unique validator
userSchema.plugin(uniqueValidator, { message: '{VALUE} has already exist.'})

//Another way to create unique validator
// userSchema.statics.doesnotExist = async (options) => {
//     return await this.where(options).countDocuments() === 0
// }

const User = mongoose.model('User',userSchema); 

export default User;