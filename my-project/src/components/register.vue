<template>
<div id="register">
	<header>
		<img src="https://static-s.bilibili.com/account/img/logo-mobile.png" alt="" @click="$router.push('/home')">
		
		<a href="#" title="">注册</a>
	</header>
	<div class="content">
		<input type="text" name="" value="" placeholder="您的昵称，例：哔哩哔哩" v-model="name">
		<input type="password" name="" value="" placeholder="您的密码, 6-16个字符组成，区分大小写" v-model="pwd">	
		<select name="">
			<option value="">中国大陆</option>
			<option value="">中国大陆</option>
			<option value="">中国大陆</option>
			<option value="">中国大陆</option>
			<option value="">中国大陆</option>
			<option value="">中国大陆</option>
		</select>
		<input type="text" name="" value="" placeholder="您的手机" v-model="telnum">
		<input type="text" name="" value="" placeholder="短信验证码" class="yanzhengma">
		<input type="button" name="" value="获取短信验证码" class="btn">

		<p>继续注册，表明您已同意<a href="https://passport.bilibili.com/register/licence" target="_blank">《bilibili网会员注册协议》</a></p>
		<input type="button" name="" value="同意并注册" class="cir-btn reg" @click="handlerLog">
		<input type="button" name="" value="登陆" class="cir-btn log">
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'register',

  data () {
    return {
    	name:"",
    	telnum:"",
    	pwd:"",
    };
  },
  methods:{
  	handlerLog(){
  		var _this= this;
		  axios.post('/api/register', {
		    name: this.name,
		    telnum: this.telnum,
		    pwd:this.pwd
		  })
		  .then(function (response) {
		    if(response.data){
		    	_this.$router.push('/login');
		    }else{

		    }
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  	}
  }
};
</script>

<style lang="scss" scoped>
#register{
	
	header{
		box-sizing: border-box;
		border: 1px solid #ddd;
    	background: #fff;
		padding: 14px 15px 12px;
		height:1.2rem;
		img{
			display:block;
			width:1.2rem;
			height:0.56rem;
			float:left;
			margin-right:0.2rem;
		}
		a{
			float:left;
			font-size:0.32rem;
			height: 0.42rem;
		    border-left: 2px solid #de698c;
		    color: #de698c;
		    font-weight: bold;
		    padding: 0.17rem 0 0 0.15rem;
		    text-decoration: none;
		}
	}
	.content{
		overflow:hidden;
		padding:0 10px;
		input , select{
			border-radius: 6px;
		    width: 100%;
		    box-sizing: border-box;
		    left: 0;
		    top: 0;
		    bottom: 0;
		    padding: 10px;
		    border: 0;
		    border-radius: 6px;
		    background: #fff;
		    width: 100%;
		    border: 1px solid #ddd;
		    height: 45px;
		    // line-height: 45px;
		    overflow: hidden;
		}
		.yanzhengma{
			width:60%;
			margin-right:4%;
		}
		.btn{
			float:right;
			width:35%;
			margin-top:18px;
			text-align: center;
			vertical-align: center;
			font-size:10px;
			background-image: linear-gradient(to top, #f5f5f5, #fff);
    		border: 1px solid #aaa;
		}
		p{
			font-size:0.16rem;
			text-align: left;
			margin-top:30px;
			text-indent:10px;
			a{
				text-decoration: none;
			}
		}
		.cir-btn{
			border-radius: 20px;
		}
		.reg{
			background:#00a1d6;
			color:#fff;
		}
		.log{
			border:1px solid #00a1d6;
			color:#00a1d6;
		}
	}
}
</style>