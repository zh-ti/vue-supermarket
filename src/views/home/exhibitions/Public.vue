<template>
  <exhibit :exhibitions="goods"/>
</template>

<script>
import Exhibit from 'components/common/exhibit/Exhibit'

import {getHomeGoods} from 'network/home/'

export default {
    components: {
        Exhibit
    },
    data(){
        return {
            page: this.$store.state.homeGoods[this.show].page,
            goods: this.$store.state.homeGoods[this.show].list,
        }
    },
    props:{
        show:{
            type: String,
            requred: true,
        },
        showData: {
            goods:{
                type: Array,
                default(){
                    return []
                }
            }
        }
    },
    created(){
        this.$store.state.homeGoods.fillGoods = this.fillGoods;
        this.fillGoods();
    },
    methods: {
        fillGoods(callback){
            getHomeGoods(this.show, ++this.page).then(result=>{
                console.log(result);
                this.$store.dispatch('addGoods', {
                    type: this.show,
                    goods: result.data.list,
                })
                callback && callback();
            }, reason=>{
                console.log(reason);
            })
        }
    }
}
</script>

<style>

</style>