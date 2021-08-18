const bookseed = require('./seedData.controler')
const user = require('../models/book.model')
const bookControler = (req, res) => {
  const { email } = req.query
  user.findOne({ email: email },(err,data)=>{
    if(err){
      res.send(err)
    }else{
      res.send(data)
    }
  })
  // bookseed();
  // res.send('seeded')
}


module.exports = bookControler