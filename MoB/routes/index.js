var express = require('express');
var router = express.Router();

const Sivang_BOOK =  []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', function(req, res) {
  res.render('entry')
});


router.post('/create', function(req, res) {
  Sivang_BOOK.push(req.body)
  res.redirect("/chacha")

});


router.get('/chacha', function(req, res) {
  res.render('library' , {Books : Sivang_BOOK })
});


router.get('/delete/:index' , function(req,res){
  Sivang_BOOK.splice(req.params.index,1) 
  res.redirect("/chacha")

})


router.get('/update/:index' , function(req,res){
  
  const i = req.params.index ;
  const b = Sivang_BOOK[i]
  
  res.render("update" , { gogo : b , index : i})
})

router.post("/update/:index" , function(req,res){

  Sivang_BOOK.push(req.params.index,1);

  const data = Sivang_BOOK.splice(req.params.index,1)

  const i = req.params.index;

  Sivang_BOOK[i] = req.body ;

  res.redirect("/chacha");


})


module.exports = router;
