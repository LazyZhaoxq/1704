<template>
  <div id="app">
  <input type="text" name="" value="" @keydown.enter="handler">
  <ul>
    <router-link to="/all">全部</router-link>
    <router-link to="/active">未完成</router-link>
    <router-link to="/complete">已完成</router-link>
  </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods:{
    handler(ev){
      this.$store.commit("add",{text:ev.target.value,isChecked:false});
    }
  },
  computed:{
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
