<template>
<ul>
	<li v-for="data in datalist"><input type="checkbox" v-model="data.isChecked"><span>{{data.text}}</span></li>
</ul>
</template>

<script>
import {mapState} from 'vuex';
export default {

  name: 'All',

  data () {
    return {
    	
    };
  },
  computed:{
  	...mapState(['datalist'])
  }

};
</script>

<style lang="css" scoped>
</style>