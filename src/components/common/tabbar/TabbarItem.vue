<template>
    <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
export default {
    props: {
        path: String,
        activeColor:{
            type: String,
            default: "#0984e3"
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {"color": this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            if(this.$route.path.indexOf(this.path) !== -1) return
            this.$router.replace(this.path)
        }
    },
}
</script>

<style scoped>
    @import "~@/assets/icon/tabbar/iconfont.css";

    .tab-bar-item{
        flex: 1;
        height: 49px;
        text-align: center;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
    }
</style>