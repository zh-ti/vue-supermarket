<template>
  <main-tabbar :tabbarList="tabbarList"></main-tabbar>
</template>

<script>
import MainTabbar from 'components/common/tabbar/MainTabbar.vue';
import {tabbar} from 'data/data.js';

export default {
    data(){
        return {
            tabbarList: tabbar
        }
    }
    ,components: {
        MainTabbar
    }
}
</script>

<style>

</style>