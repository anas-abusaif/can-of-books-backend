const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({
  title:String,
  description:String,
  status:String,
});

const userSchema= new mongoose.Schema({
  email:String,
  books:[bookSchema]
});

const user = mongoose.model('users', userSchema);


module.exports=user;