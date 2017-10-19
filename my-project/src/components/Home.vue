<template>
	<div id="home">
		<header>
			<div class="wrapper">
				<router-link to="/home"><img src="//s1.hdslb.com/bfs/static/mult/images/logo.png" alt=""></router-link>
				<div>
					<i class="iconfont" @click="$router.push('/search')">&#xe6ac;</i>
					<i class="iconfont" @click="$router.push('/my')">&#xe6b8;</i>
					<a class="clear">下载客户端</a>
				</div>
			</div>
			<div class="nav">
				<div class="wrapper">
					<ul class="clear">
						<router-link to="/home" tag="li">首页</router-link>
						<li @click="handler" id="donghua">动画</li>
						<li @click="handler" id="fanjv">番剧</li>
						<li @click="handler" id="guochuang">国创</li>
						<li @click="handler" id="yinyue">音乐<i class="iconfont">&#xe6a6;</i></li>
					</ul>
					
				</div>
			</div>
		</header>
		<swipe class="my-swipe">
		  <swipe-item v-for="data in looplist" :key="data.id">
		  	 <img :src="data.pic.replace('http','https')"/>
		  </swipe-item>

		</swipe>
		<hot v-model="hotlist"></hot>
		<donghua v-model="donghualist"></donghua>
		
	</div>

</template>

<script>
import donghua from '@/components/donghua'
import hot from '@/components/Hot';
import axios from 'axios';
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {

  name: 'Home',

  data () {
    return {
    	looplist:[],
    	hotlist:[],
    	donghualist:[]
    };
  },
  mounted(){
  	axios.get("/api/home").then(res=>{
  		console.log(res.data);
  		this.looplist=res.data.data;
  		
  	})
  	axios.get("/api/hot").then(res=>{
  		console.log(res.data);
  		this.hotlist=res.data.data.slice(0,4);
  		
  	})
  	axios.get("/api/donghua").then(res=>{
  		console.log(res.data);
  		this.donghualist=res.data.data[1].slice(0,4);
  		
  	})
  },
  methods:{
  	handler(ev){
  		console.log(ev.target.id);
  		this.$router.push(`channel/${ev.target.id}`);
  	}
  },
  components:{
  	'swipe':Swipe,
  	'swipe-item':SwipeItem,
  	hot,
  	donghua
  }
  
};
</script>
<style type="text/css" media="screen" src="../assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>




#home{
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
	

	.my-swipe{
		padding-top:1.76rem;
		height: 2.34rem;
	}
	
}

</style>