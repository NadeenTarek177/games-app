<template>
  <div>
    <navigation-comp/>
    <router-view></router-view>
  </div>
</template>

<script>
import navigationComp from './components/navigation.vue'
export default {
  name: 'App',
  components: {
    navigationComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
