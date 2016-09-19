<template>
  <div class="scroll-page">
      <cell
      v-for="item in cellList"
      :title="item.title"
      :value="item.value"
      :icon-class="item.iconClass"
      :icon-style="item.iconStyle"
      :is-link="false"
      @on-link="$router.push(item.link)"></cell>
  </div>
</template>
<script>
import { Cell, } from 'components';

export default {
  data() {
    return {
      cellList: [
        {
          title: 'Cell',
          value: '单条按钮',
          link: '/cell',
          iconClass: 'i i-xihuan',
          iconStyle: { 'color': '#e66' },
        },
        {
          title: 'Grid',
          value: 'Flex网格',
          link: '/grid',
          iconClass: 'i i-order',
          iconStyle: { 'color': '#007FFF' },
        },
        {
          title: 'NativeScroll',
          value: '原生滚动',
          link: '/nativescroll',
          iconClass: 'i i-gongyingshang',
          iconStyle: { 'color': '#ff832c' },
        },
        {
          title: 'Nothing',
          value: '结果组件 - 无',
          link: '/nothing',
          iconClass: 'i i-nothing',
          iconStyle: { 'color': '#e5e9f2' },
        },
        {
          title: 'Input',
          value: '单条输入框',
          link: '/input',
          iconClass: 'i i-link',
          iconStyle: { 'color': '#324057' },
        },
        {
          title: 'Checkbox',
          value: '复选框 - 样式',
          link: '/checkbox',
          iconClass: 'i i-add',
          iconStyle: { 'color': '#ff4949' },
        },
        {
          title: 'HeaderBar',
          value: '顶部导航',
          link: '/headerbar',
          iconClass: 'i i-dizhi',
          iconStyle: { 'color': '#1D8CE0' },
        },
        {
          title: 'IconText',
          value: '图标 + 文字',
          link: '/icontext',
          iconClass: 'i i-tishi',
          iconStyle: { 'color': '#13CE66' },
        },
        {
          title: 'Mobi.css',
          value: '简小精悍的移动端css库',
          link: '/mobicss',
          iconClass: 'i i-tishi',
          iconStyle: { 'color': '#13CE66' },
        },
        {
          title: 'Spinner',
          value: '来自loaders.css的加载小动画',
          link: '/spinner',
          iconClass: 'i i-tishi',
          iconStyle: { 'color': '#13CE66' },
        },
      ],
    };
  },
  components: {
    Cell,
  },
};
</script>
<style lang="scss">
</style>
