<template>
	<div id="channel">
	
		<header>
			<div class="wrapper">
				<router-link to="/home"><img src="//s1.hdslb.com/bfs/static/mult/images/logo.png" alt=""></router-link>
				<div>
					<i class="iconfont" @click="$router.push('/search')">&#xe6ac;</i>
					<i class="iconfont">&#xe6b8;</i>
					<a class="clear">下载客户端</a>
				</div>
			</div>
			<div class="nav">
				<div class="wrapper">
					<ul class="clear">
						<router-link to="/home" tag="li">首页</router-link>
						<router-link tag="li" to="/channel/donghua" @click="handler" id="donghua">动画</router-link>
						<router-link tag="li" to="/channel/fanjv" @click="handler">番剧</router-link>
						<router-link tag="li" to="/channel/guochuang" @click="handler">国创</router-link>
						<router-link tag="li" to="/channel/yinyue" @click="handler">音乐<i class="iconfont">&#xe6a6;</i></router-link>
					</ul>
					
				</div>
			</div>
			
		</header>
		

		<div class="space">
		
		</div>
		<router-view></router-view>
		
	</div>

</template>

<script>
import donghua from '@/components/donghua';
import hot from '@/components/Hot';
import axios from 'axios';

export default {

  name: 'channel',
  
  data () {
    return {
    	looplist:[],
    };
  },
  mounted(){
  	
  },
  methods:{
  	handler(ev){
  		console.log(ev);
  		var address = '';
  		switch(ev.target.id){
  		case 'donghua':
  			axios.get('/api/donghua').then(res=>{
		  		console.log('1');
		  		console.log(res.data);
		  		this.hotlist=res.data.recommend.list.slice(0,4);
  			})
  		break;
  		case 'fanjv':
  			axios.get('/api/fanjv').then(res=>{
		  		console.log('1');
		  		console.log(res.data);
		  		_this.hotlist=res.data.recommend.list.slice(0,4);
  			})
  		break;
  		case 'guochuang':
  			axios.get('/api/guochuang').then(res=>{
		  		console.log('1');
		  		console.log(res.data);
		  		_this.hotlist=res.data.data.slice(0,4);
  			})
  		break;
  		case 'yinyue':
  			axios.get('/api/yinyue').then(res=>{
		  		console.log('1');
		  		console.log(res.data);
		  		_this.hotlist=res.data.data.slice(0,4);
  			})
  		break;
  	}
  		
  	}
  },
  components:{
  	hot,
  	donghua
  }
  
};
</script>
<style type="text/css" media="screen" src="../assets/iconfont/iconfont.css">
	
</style>
<style lang="scss" scoped>




#channel{
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
				justify-content:space-around;
				align-items:center;
				li{
					width:20%;
					display:flex;
					justify-content:space-around;
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
	

	.space{
		padding-top:1.7rem;
		
	}
	
}

</style>