const express =require('express');
const router = express.Router();
//router.get('/',(req,res,Next)=>{
  //  res.send('Express router is working');
//});
router.get('/',(req,res,Next)=>{
    res.render('home.ejs');
})

module.exports = router;