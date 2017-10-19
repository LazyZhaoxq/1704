<template>
<div id="login">
	<header>
		<img src="https://static-s.bilibili.com/account/img/logo-mobile.png" alt="" @click="$router.push('/home')">
		
		<a href="#" title="">登陆</a>
	</header>
	<div class="content">
		<input type="text" name="" value="" placeholder="你的手机号/邮箱" v-model="telnum">
		<input type="password" name="" value="" placeholder="密码" v-model="pwd">
		
		<p>{{tip}}<a href="#" title="">忘记密码?</a></p>
		<input type="button" name="" value="立即登录" class="cir-btn reg" @click="handleLog">
		<input type="button" name="" value="注册" class="cir-btn log" @click="$router.push('/register')">
		<span>第三方合作网站登陆</span>
		<div class="link">
			<a href="#" title="" class="img_xinlang"></a>
			<a href="#" title="" class="img_qq"></a>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'login',

  data () {
    return {
    	telnum:"",
    	pwd:"",
    	tip:""
    };
  },
  methods:{
  	handleLog(){
  		var _this= this;
		  axios.post('/api/login', {
		    telnum: this.telnum,
		    pwd: this.pwd
		  })
		  .then(function (response) {
		    if(response.data){
		    	_this.$router.push('/home');
		    }else{
		    	console.log(response);
		    	_this.tip="用户名或密码错误";
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
#login{
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
		padding:0 15px;
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
		p{
			overflow:hidden;
			font-size:0.16rem;
			color:red;

			text-align: left;
			a{
				float:right;
				text-decoration: none;
				font-size:0.32rem;
				color:#00a1d6;
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
		span{
			font-size:0.32rem;
			color:#999;
			margin-bottom:40px;
		}
		.link{
			display:flex;;
			justify-content:center;

			a{
				margin-right:20px;
				float:left;
				background:blue;
				display:block;
				width:60px;
				height:50px;
			}
			.img_xinlang{
				
					
			}
			.img_qq{

			}
		}
	}
}
</style>