var http =require("http");
var https = require("https");

function spider(path, callback){
    //爬数据
    var options = {
        hostname: "api.bilibili.com",
        port: "443", //https 443 端口号， http80端口号
        path: path,
        method: "get",
        // headers: {
        //    'Content-Type': 'application/x-www-form-urlencoded',
        //    'Content-Length': Buffer.byteLength(postData)
        // }
    };

    var req = https.request(options,function(res){
        var alldata ="";
        res.on("data",function(chunk){
            alldata+=chunk;
        })

        res.on("end",function(){
            callback(alldata);
        })  
    })

   
    
    req.end();
 
}    

module.exports = spider;