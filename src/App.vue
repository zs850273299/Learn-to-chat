<template>
  <div id="app">
    <router-view/>11
  </div>
</template>


<style>
html,body,#app,.mint-tab-container,.mint-tab-container-wrap{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body #app:nth-child(1){
  height: 100%;
}
</style>
