<template>
	<div id="hot">
		<div class="hot-header">
			<div class="left">
				<i class="iconfont" :style="{color:'#42C9E8'}">&#xe820;</i>
				<span :style="{fontSize:0.34134+'rem',color:'#212121'}">动画</span>
			</div>
			<div class="left hot-header-right">
				
				<span :style="{color:'#ffa726'}">查看更多</span>
				<i class="iconfont">&#xe6a7;</i>
			</div>
		</div>
		<div class="hot-list">
			<div v-for="data in value" @click="handleClick" :id="data.aid">
				<img :src="data.pic.replace('http','https')+'@339w_212h.webp'" alt="" :id="data.aid" :style="{width:3.389+'rem',height:1.8994+'rem'}">
				<span :id="data.aid">{{data.title}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {

  name: 'Hot',

  data () {
    return {
    	hotlist:[]
    };
  },
  props:["value"],
  mounted(){
  	// axios.get('/api/donghua').then(res=>{
  		
  	// 	console.log(res.data);
  	// 	this.hotlist=res.data.data[1].slice(0,4);
  	// })
  },
  methods:{
  	handleClick(ev){
  		window.location.href=`https:m.bilibili.com/video/av${ev.target.id}.html`;
  	}
  }
};
</script>
<style type="text/css" media="screen" src="../assets/iconfont/iconfont.css">
	
</style>
<style lang="scss" scoped>
#hot{
	.hot-header{
		display:flex;
		justify-content:space-between;
		align-items:center;
		height:1.05rem;
		padding:0 0.2rem;
		.hot-header-right{
			i,span{
				margin-left: 0.1rem;
			}
		}
	}
	.hot-list{
		overflow: hidden;
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
		padding:0 0.2rem;
		div{
			
			width:3.39rem;
			float:left;
			margin-bottom:0.2rem;
			img{
				
				width:100%;
				border-radius: 0.1rem;
			}

		}
	}
}
</style>