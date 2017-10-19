var http =require("http");
var https = require("https");
var querystring = require("querystring");

function spiderPost(path,keyword,callback){
    console.log('2');
    var postData = querystring.stringify({
        bangumi_num:3,
        keyword:encodeURIComponent(keyword),
        main_ver:"v3",
        movie_num:3,
        order:"totalrank",
        page:1,
        pagesize:20,
        platform:"h5",
        search_type:"all",
    })
    var options = {
        hostname: 'api.bilibili.com',
        port: 443, //https 443 端口号， http80端口号
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
            'Referer':'http://m.bilibili.com/search.html?keyword=%E5%95%8A%E6%9C%8B%E5%8F%8B%E8%BF%98%E9%92%B1'
        }
    };

    var req = https.request(options,function(res){
        var alldata ="";
        res.on("data",function(chunk){
            alldata+=chunk;
        })

        res.on("end",function(){
            callback(alldata);
            console.log(alldata);
        })  
    })
     req.write(postData);
    req.end();
 
}    

module.exports = spiderPost;