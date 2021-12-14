<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "tabbar",
}
</script>

<style scoped>
    #tab-bar{
        width: 100vw;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #eee;
        position: fixed;
        bottom: 0;
        box-shadow: 0 0 5px rgba(200,200, 200, 0.4);
    }
</style>