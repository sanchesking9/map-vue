<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
  import HeaderBar from '@/components/HeaderBar'
  export default {
    components: {
      HeaderBar
    },
    name: 'app'
  }
</script>

<style>
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background: #f2f2f3;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f2f2f3;
  }
</style>
