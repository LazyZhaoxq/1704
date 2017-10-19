<template>
<ul>
	
<li v-for="data in activelist"><input type="checkbox" v-model="data.isChecked"><span>{{data.text}}</span></li>

</ul>
</template>

<script>

import {mapGetters} from 'vuex';
export default {

  name: 'Active',

  data () {
    return {

    };
  },
  computed:{
  	...mapGetters(['activelist'])

  }
};
// console.log(activelist);
</script>

<style lang="css" scoped>
</style>