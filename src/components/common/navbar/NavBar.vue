<template>
  <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style socped>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 10px #efefef;
    }
    .left,
    .center,
    .right{
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
    .left,
    .right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>