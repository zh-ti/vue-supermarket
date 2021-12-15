<template>
    <div class="card">
        <a :href="showMessage.link">
            <img :src="showMessage.show.img">
            <div class="message">
                <div class="title">{{showMessage.title}}</div>
                <div class="about">
                    <span class="price">价格：{{showMessage.price}}</span>
                    <span class="fav">收藏 {{showMessage.cfav}}</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props:{
        showMessage:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .card{
        margin-bottom: 5px;
        background-color: #fff;
        border-radius: 7px;
        overflow: hidden;
    }
    .card img{
        width: 100%;
        height: 83%;
        border-radius: 7px 7px 0 0;
    }
    .message{
        width: 100%;
        padding-bottom: 5px;
        font-size: 12px;
        background-color: #fff;
    }
    .title{
        padding: 5px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .about{
        margin-top: 3px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .price{
        color: #d63031;
    }
    .fav{
        color: #e17055;
    }
</style>