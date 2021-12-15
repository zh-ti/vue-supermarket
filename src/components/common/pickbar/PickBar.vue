<template>
  <div id="pick-bar">
      <div class="pick-item" v-for="(item, index) in pickList" :key="item.id">
          <span :class="{active: current ==  index}"  @click="itemActive(index, item.name)">{{item.title}}</span>
      </div>
  </div>
</template>

<script>
export default { 
    data(){
        return {
            pickList:[
                {
                    id: 1,
                    name: "pop",
                    title: '流行'
                },
                {
                    id: 2,
                    name: 'new',
                    title: '新款'
                },
                {
                    id: 3,
                    name: 'sell',
                    title: '精选'
                },
            ],
            current: 0,
        }
    },
    methods: {
        itemActive(index, name){
            this.current = index;
            this.$emit('pickItemClick', name)
        }
    }
}
</script>

<style scoped>
    #pick-bar{
        width: 100vw;
        height: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #fff;
    }
    .pick-item span{
        position: relative;
    }
    .pick-item span::after{
        transform: scale(0);
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -5px;
        left: 0;
        background-color: #0984e3;
        border-radius: 7px;
        box-shadow: 0 0 2px #74b9ff;
        transition: 0.3s;
    }
    .active::after{
        transform: scale(1) !important;
    }
</style>