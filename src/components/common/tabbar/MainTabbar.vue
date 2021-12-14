<template>
    <tabbar>
        <tabbar-item :activeColor="activeColor" v-for="item in tabbarList" :key="item.id" :path="item.path">
            <span slot="item-icon" :class="'iconfont '+item.icon"></span>
            <span slot="item-text" class="text">{{item.text}}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import Tabbar from "./Tabbar"
import TabbarItem from "./TabbarItem"

export default {
    components: {
        Tabbar,
        TabbarItem,
    },
    props:{
        activeColor: String,
        tabbarList: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style>
    .iconfont{
        font-size: 22px;
    }
    .text{
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
    }
</style>