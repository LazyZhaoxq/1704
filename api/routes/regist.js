/**
 * Created by Administrator on 2017/8/11.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('1111');
    res.header("Access-Control-Allow-Origin","*");
   
    res.render('regist', { title: '注册页面',isShow:false});

     
});

router.post('/', function(req, res, next)  {
    res.header("Access-Control-Allow-Origin","*");
    console.log(req.body);
    dbhandler.user.create({
        name:req.body.phone,
        password:req.body.pwd
    },function(error,result){
        if(!error){
            res.redirect('/');
        }else{
            console.log(error);
        }
    })

})

module.exports = router;
