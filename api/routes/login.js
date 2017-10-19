/**
 * Created by Administrator on 2017/8/11.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '登陆页面',isShow:false});
});

router.post('/', function(req, res, next)  {
    console.log(req.body);
    dbhandler.user.findOne({
        email:req.body.email,
        password:req.body.password
    },function(error,data){
        if(data){
            req.session.myx = true;
            res.redirect('/');
        }else{
            console.log('false');
            res.render('login',{title:'登录页面',isShow:true})
        }
    })

})




module.exports = router;
