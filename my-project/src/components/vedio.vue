<template>
<div id="vedio">
	<header>
			<div class="wrapper">
				<router-link to="/home"><img src="//s1.hdslb.com/bfs/static/mult/images/logo.png" alt=""></router-link>
				<div>
					<i class="iconfont" @click="$router.push('/search')">&#xe6ac;</i>
					<i class="iconfont" @click="$router.push('/my')">&#xe6b8;</i>
					<a class="clear">下载客户端</a>
				</div>
			</div>
	</header>
	<div class="playbox">
		<video width="100%" height="100%" preload="auto" webkit-playsinline="" playsinline="" load="loaded" style="display: inline;" controls="controls" autoplay><source src="http://upos-hz-mirrorks3.acgvideo.com/upgcxcode/37/20/23842037/23842037-1-16.mp4?um_deadline=1506039748&amp;platform=html5&amp;rate=119703&amp;oi=2946658503&amp;um_sign=e86e8cd257a21081b297055b39014464&amp;gen=playurl&amp;os=ks3" type="video/mp4" ></video>		
	</div>
</div>
</template>

<script>
export default {

  name: 'vedio',

  data () {
    return {

    };
  }
};
</script>
<style type="text/css" media="screen" src="../assets/iconfont/iconfont.css"></style>
	
</style>
<style lang="scss" scoped>
#vedio{
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
	}
	.playbox{
		height:4.6875rem;
		// background:red;
	}
}
</style>