<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    
    <Ceshi />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Ceshi from './components/Ceshi.vue'
export default {
  name: 'app',
  components: {
//  HelloWorld
 Ceshi
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
