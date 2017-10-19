<template>
<div id="my">
	<header>
			<div class="wrapper">
				<router-link to="/home"><img src="//s1.hdslb.com/bfs/static/mult/images/logo.png" alt=""></router-link>
				<div>
					<i class="iconfont" @click="$router.push('/search')">&#xe6ac;</i>
					<i class="iconfont" >&#xe6b8;</i>
					<a class="clear">下载客户端</a>
				</div>
			</div>
			<div class="my-bg">
				<img src="//s1.hdslb.com/bfs/static/mult/images/bannerTop.png" alt="">
				<div class="my-button">
					<span class="my-reg" @click="$router.push('/register')">注册</span>
					<span class="my-log" @click="$router.push('/login')">登陆</span>
				</div>
			</div>
			<div class="nav">
				<div class="wrapper">
					<ul class="clear">
						<li @click="handler" id="donghua">历史记录</li>
						<li @click="handler" id="fanjv">投稿</li>
					</ul>
					
				</div>
			</div>
		</header>
</div>
</template>

<script>
export default {

  name: 'my',

  data () {
    return {

    };
  },
  methods:{
  	handler(){
  		
  	}
  }
};
</script>
<style type="text/css" media="screen" src="../assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
#my{
	.clear:after{
		content:"";
		display:block;
		clear:both;
	}
	font-size:0.16rem;
	
	img{
		display:block;
		width:100%;
	}
	header{
		.my-bg{
			position:relative;
			.my-button{
				    position: absolute;
				    top: 1.5rem;
				    left: 1.8rem;
				    width:4.0rem;
				    
				span{
					
					display: block;
				    line-height: 0.6rem;
				    font-size: 0.3rem;
				    color: #fb7299;
				    text-align: center;
				    width: 1.5rem;
				    border-radius: .06rem;
				}
				.my-reg{
					background:#fff;
					color:#fb7299;
					float:left;
				}
				.my-log{
					background:#fb7299;
					color:#fff;
					float:right;
				}

			}
		}
		background:#fff;
		z-index:2;
		width:100%;
		position:fixed;
		.wrapper{
			align-items:center;
			display:flex;
			justify-content:space-between;
			height:0.88rem;
			padding-left:0.2rem;
			a{	
				display:block;
				width:1.24rem;
				height:0.55rem;
			}
			div{
				display:flex;
				align-items:center;
				a{
					float:right;
					display:block;
					width:1.60rem;
					height:0.5rem;
					text-align:center;
					line-height:0.5rem;
					border:0.010665rem solid #fb7299;
					border-radius:0.085335rem;
					margin-left:0.4rem;
					background:#fb7299;
					color:#fff;
				}
				i{
					color:#aaa;
					margin-left:0.3rem;
					line-height:0.5rem;
				}
			}
		}
		.nav{
			.wrapper{
				ul{
					height:0.88rem;
					width:100%;
					float:left;
					display:flex;
					align-items:center;
					li{
						padding:0 0.4rem 0 0;
						display:flex;
						justify-content:flex-start;
						align-items:center;
						list-style:none;
						font-size:0.29866rem;
						color:#757575;
						float:left;
						i{

							font-weight:border;
							font-size:0.32rem;
							color:#757575;
						}

					}

				}
				
			}
		}	

		
	}	
	
}
</style>