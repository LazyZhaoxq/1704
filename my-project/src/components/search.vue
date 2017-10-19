<template>
<div id="search">
	<header>
			<div class="wrapper">
				<div class="input">
					<input type="text" name="" value="" placeholder="" @keydown.enter="lookaround">
				</div>
				<div class="cancel">
					
					<router-link to="/home" class="clear">取消</router-link>
				</div>
			</div>
			<div class="nav">
				<div class="wrapper">
					<ul class="clear">
						<li @click="handler">综合</li>
						<li @click="handler">番剧(0)</li>
						<li @click="handler">UP主(0)</li>
						<li @click="handler">影视(0)</li>
					</ul>
					
				</div>
			</div>
			<div class="nav">
				<div class="wrapper">
					<ul class="clear">
						<li @click="handler">默认排序</li>
						<li @click="handler">播放多</li>
						<li @click="handler">新发布</li>
						<li @click="handler">弹幕多</li>
					</ul>
					
				</div>
			</div>
			<div class="search-list">
				<div>
					<div class="s-l-img">
						
					</div>
					<div class="s-l-detail">
						<p></p>
						<p></p>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
	</header>
</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'search',

  data () {
    return {

    };
  },
  methods:{
  	handler(){

  	},
  	lookaround(ev){
  		console.log(ev.target.value);
  		axios.post('/api/search',{
  			keyword:ev.target.value,
  			bangumi_num:3,
  			main_ver:"v3",
  			movie_num:3,
  			order:"totalrank",
  			page:1,
  			pagesize:20,
  			platform:"h5",
  			search_type:"all",
  		}).then(res=>{
  			console.log(res);
  		})
  	}

  }
};
</script>
	<style type="text/css" media="screen" src="../assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
#search{
	input{

	}
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
			height:0.6rem;
			padding:0.1rem 0.2rem;
			div.input{
				height:100%;
				input{
					display: block;
				    width: 100%;
				    height: 100%;
				    padding-left: 0.9rem;
				    padding-right: 1.7rem;
				    box-sizing: border-box;
				    font-size: -0.5000rem;
				    border: 0 solid #e7e7e7;
				    border-radius: .05rem;
				    background-color: #f4f4f4;
				    color: #505050;

				}
				margin-right:0.2rem;
			}
			
			div.cancel{
				display:flex;
				align-items:center;
				a{
					text-decoration: none;
					float:right;
					display:block;
					width:0.8rem;
					height:0.5rem;
					text-align:center;
					line-height:0.5rem;
					
					
					background:#fff;
					color:#fb7299;
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
}
</style>