var express = require('express');
var router = express.Router();
var spider = require("../spider/spider");
var spiderPost = require("../spider/spiderPost");
var spiderHttp = require("../spider/spiderHttp");


router.get('/home', function(req, res) {
    console.log('11111');
	// res.header("Access-Control-Allow-Origin","*");

	spider("/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695",function(data){
		// console.log(data);
		res.send(data);
	})
});
router.get('/hot', function(req, res) {
	// res.header("Access-Control-Allow-Origin","*");


    console.log(req.query.cate);
	spider("/x/web-interface/ranking/index?day=3",function(data){
		// console.log(data);
		res.send(data);
	})
});
router.get('/fanjv', function(req, res) {
    // res.header("Access-Control-Allow-Origin","*");

    
    console.log(req.query.cate);
    // spider("/index/catalogy/13-recommend.json",function(data){
    //     // console.log(data);
    //     res.send(data);
    // })
});
router.get('/donghua', function(req, res) {
    // res.header("Access-Control-Allow-Origin","*");;


    // console.log(req.query.cate);
    spider("/x/web-interface/dynamic/index?jsonp=jsonp",function(data){
        // console.log(data);
        res.send(data);
    })
});
router.get('/donghuaX', function(req, res) {
    // res.header("Access-Control-Allow-Origin","*");;
    res.send()

    // console.log(req.query.cate);
    // spiderHttp("http://localhost:3000/donghua.json",function(data){
    //     // console.log(data);
    //     res.send(data);
    // })
});
router.post('/search', function(req, res, next)  {
    console.log('1');
    console.log(req.body.keyword);
    var keyword = req.body.keyword;
    spiderPost("/search/searchengine",keyword,function(data){
        console.log(data);
        res.send(data);
    })
    
    },function(error,result){
        if(!error){
            res.send(true);
        }else{
            console.log(error);
        }
    });


router.get('/detail', function(req, res) {
	res.header("Access-Control-Allow-Origin","*");

	console.log(req.query.id);

	spider("/index.php?act=deal&op=index&id="+req.query.id+"&ajax=1",function(data){
		// console.log(data);
		res.send(data);
	})
});



router.post('/register', function(req, res, next)  {
    console.log(req.body);
    dbhandler.user.create({
        name:req.body.name,
        password:req.body.pwd,
        telnum:req.body.telnum
    },function(error,result){
        if(!error){
            res.send(true);
        }else{
            console.log(error);
            res.send(false);
        }
    })

})
router.post('/login', function(req, res, next)  {
    console.log(req.body);
    dbhandler.user.findOne({
        telnum:req.body.telnum,
        password:req.body.pwd
    },function(error,data){
        if(data){
            // req.session.myx = true;
            // res.redirect('/');
            res.send(true);
        }else{
            console.log('false');
            res.send(false);
            res.render('login',{title:'登录页面',isShow:true})
        }
    })

})

module.exports = router;
