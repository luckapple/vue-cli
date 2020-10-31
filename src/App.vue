<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  export default {
    computed: {
    },
    methods: {
    }
  }
</script>

<style>
  @import url(./common/css/common.css);

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .tab_list {
    margin: 0 auto;
    justify-content: center;
  }

  .tab_item {
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    text-align: center;
    color: #fff;
    display: block;
    background: goldenrod;
    margin-right: 30px;
    text-decoration: none;
  }

  .tab_item:last-child {
    margin: 0;
  }
</style>