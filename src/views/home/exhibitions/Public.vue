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
    props:{
        show: {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            page: 0,
            goods: [],
        }
    },
    created(){
        this.fillGoods();
    },
    methods:{
        fillGoods(){
            getHomeGoods(this.show, ++this.page).then(result=>{
                this.goods.push(...result.data.list)
            })
        }
    }
}
</script>

<style>

</style>