<template>
  <div ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BetterScroll from 'better-scroll'

export default {
    name: "Scroll",
    data(){
        return {
            scroll: null,
        }
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper, {
            click: true,
            observeDom:true,
            observeImage:true,
            pullUpLoad: true,
        })
        this.scroll.on('pullingUp', ()=>{
            this.$emit('loadMore', this.scroll);
        })
    }
}
</script>

<style>

</style>