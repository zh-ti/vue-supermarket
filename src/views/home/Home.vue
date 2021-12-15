<template>
  <div id="home">
    <nav-bar class="home-nav"><h4 slot="center">购物街</h4></nav-bar>
    <swiper class="home-swiper" :banners="banners.list"/>
    <recommend :recommends="recommend.list"/>
    <feature />
    <pick-bar class="home-pick" @pickItemClick="pickItemClick"/>
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Swiper from "./Swiper"
import Recommend from "./Recommend"
import Feature from './Feature'
import PickBar from 'components/common/pickbar/PickBar'

import {getHomeMultidata} from 'network/home'

export default {
  data(){
    return {
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods:{
        pop: [],
      }
    }
  },
  components:{
    NavBar,
    Swiper,
    Recommend,
    Feature,
    PickBar
  },
  created(){
    getHomeMultidata().then(result=>{
      this.banners = result.data.banner
      this.dKeyword = result.data.dKeyword
      this.keywords = result.data.keywords
      this.recommend = result.data.recommend
    });
  },
  methods:{
    pickItemClick(name){
      if(this.$route.path == '/home/'+name) return;
      this.$router.replace('/home/'+name);
    }
  }
}
</script>

<style scoped>
  #home{
    background-color: #ddd;
  }
  main{
    padding: 5px 10px;
    padding-bottom: 50px;
    min-height:100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    width: 100vw;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .home-swiper{
    margin-top: 44px;
  }
  .home-pick{
    position: sticky;
    top: 44px;
  }
</style>