<template>
  <div id="exhibit">
      <goods-card class="item" v-for="item in exhibitions" :key="item.iid" :showMessage="item"/>
  </div>
</template>

<script>
import GoodsCard from './Card'

export default {
    props:{
        exhibitions:{
            type: Array,
            default(){
                return []
            },
        }
    },
    components:{
        GoodsCard
    }
}
</script>

<style scoped>
    #exhibit{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .item{
        width: 48%;
    }
</style>