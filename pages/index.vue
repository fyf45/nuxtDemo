<template>
  <div>
    <div class="box">
      <img src="~static/img/cc.jpg" alt="">
    </div>
    <h1 class="title">首页</h1>
    <nuxt-link :to="{name:'about'}">关于我们</nuxt-link>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
.title{
  color:aqua;
  font-size: 16px;
}
.box{
  width: 500px;
  height: 312px;
}
.box img{
  display: block;
  width: 100%;
  height: 100%
}
</style>

