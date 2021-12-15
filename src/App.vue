<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/content/Tabbar';

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
  @import "~assets/css/base.css";
</style>
