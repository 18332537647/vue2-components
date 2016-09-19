<template>
<div>
  <h1>原生滚动</h1>
  <ul class="nativescroll-content">
    <li v-for="n in 100">{{ n }}</li>
  </ul>
</div>

</template>

<style lang="scss" scoped>
.nativescroll-content{
  height: 500px;
  overflow:scroll;
  -webkit-overflow-scrolling: touch;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>
