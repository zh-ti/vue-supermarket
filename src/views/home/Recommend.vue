<template>
  <div class="recommend">
      <div class="item" v-for="item in recommends" :key="item.sort">
          <a :href="item.link">
                <img :src="item.image" alt="">
                <span>{{item.title}}</span>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        padding: 5px 0;
        display: flex;
        width: 100vw;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        background-color: var(--color-background);
    }
    .item{
        flex: 1;
    }
    .item img{
        width: 70px;
        height: 70px;
    }
    .item span{
        display: block;
        font-size: 12px;
    }
</style>