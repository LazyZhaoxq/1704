var http =require("http");
var https = require("https");

function spiderHttp(path, callback){
    //爬数据
    var options = {
        hostname: "www.bilibili.com",
        port: "80",//https 443 端口号， http80端口号
        path: path,
        method: "get",
        headers: {
               // 'Content-Type': 'application/json; charset=UTF-8',
               // 'Content-Encoding':'gzip',

               Accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8',
'Cache-Control':'max-age=0',
Connection:'keep-alive',
Host:'www.bilibili.com',
'If-Modified-Since':'Thu, 21 Sep 2017 07:43:13 GMT',
'Upgrade-Insecure-Requests':1,
'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
            }
    };

    var req = http.request(options,function(res){
        var alldata =new Buffer("");

        res.on("data",function(chunk){
            var bug = new Buffer("比好");
            console.log(chunk);
            // Buffer
            
            alldata= Buffer.concat([alldata,chunk])

        })

        res.on("end",function(){
            // console.log(alldata);
            callback(alldata.toString("utf-8"));
        })  
    })

   
    
    req.end();
 
}    

module.exports = spiderHttp;