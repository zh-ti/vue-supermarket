<template>
  <div id="home">
    <nav-bar class="home-nav"><h4 slot="center">购物街</h4></nav-bar>
    <scroll class="wrapper" @loadMore="loadMore">
      <swiper class="home-swiper" :banners="banners.list"/>
      <recommend :recommends="recommend.list"/>
      <feature />
      <pick-bar class="home-pick" @pickItemClick="pickItemClick"/>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Swiper from "./Swiper"
import Recommend from "./Recommend"
import Feature from './Feature'
import PickBar from 'components/common/pickbar/PickBar'
import Scroll from 'components/common/scroll/Scroll'

import {getHomeMultidata} from 'network/home'

export default {
  data(){
    return {
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      bScroll: null,
      fillGoods: this.$store.state.homeGoods.fillGoods
    }
  },
  components:{
    NavBar,
    Swiper,
    Recommend,
    Feature,
    PickBar,
    Scroll
  },
  created(){
    getHomeMultidata().then(result=>{
      this.banners = result.data.banner
      this.dKeyword = result.data.dKeyword
      this.keywords = result.data.keywords
      this.recommend = result.data.recommend
    });
  },
  mounted(){
  },
  activated(){
    this.$router.push('/home/pop');
  },
  methods:{
    pickItemClick(name){
      if(this.$route.path == '/home/'+name) return;
      this.$router.replace(name);
    },
    loadMore(scroll){
      // console.log(this.$store.state.homeGoods.pop.page);
      this.$store.state.homeGoods.fillGoods(scroll.finishPullUp);
    }
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
    background-color: #ddd;
  }
  .wrapper{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
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