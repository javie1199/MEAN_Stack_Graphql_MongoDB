import mongoose  from 'mongoose';
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: String,
    username: String,
    name: String,
},{timestamps: true})

export default mongoose.model('User',userSchema);