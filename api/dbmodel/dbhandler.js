/**
 * Created by Administrator on 2017/8/11.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = {
    name:{type:String},
    password:{type:String},
    telnum:{type:String}
}

mongoose.model('user',new Schema(user));

module.exports = {
    user:mongoose.model('user')
}