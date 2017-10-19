<template>
<div id="yinyue">

	<hot v-model="hotlist"></hot>
	<donghua v-model="donghualist"></donghua>
</div>
</template>

<script>
import hot from '@/components/Hot'
import donghua from '@/components/donghua'
import axios from 'axios'
export default {

  name: 'yinyue',

  data () {
    return {
    	hotlist:[],
    	donghualist:[]
    };
  },
  components:{
  	hot,
  	donghua
  },
  mounted(){
  	axios.get('/yinyue.json').then(res=>{
  		console.log(res.data)
  		this.hotlist = res.data.recommend.list.slice(0,4);
  	})
  	axios.get('/api/donghua').then(res=>{
  		console.log(res.data)
  		this.donghualist = res.data.data[1].slice(0,4);
  	})

  }
};
</script>

<style lang="css" scoped>
</style>