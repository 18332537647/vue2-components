import Vue from 'vue';
import VueRouter from 'vue-router';
// 页面
import Home from '../views/home';
import Grid from '../views/grid';
import Cell from '../views/cell';
import Nothing from '../views/nothing';
import Input from '../views/input';
import Checkbox from '../views/checkbox';
import IconText from '../views/iconText';
import HeaderBar from '../views/headerBar';
import NativeScroll from '../views/nativeScroll';
import MobiCss from '../views/mobiCss';
import Spinner from '../views/spinner';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/cell', component: Cell },
    { path: '/grid', component: Grid },
    { path: '/nothing', component: Nothing },
    { path: '/input', component: Input },
    { path: '/checkbox', component: Checkbox },
    { path: '/icontext', component: IconText },
    { path: '/headerbar', component: HeaderBar },
    { path: '/nativescroll', component: NativeScroll },
    { path: '/mobicss', component: MobiCss },
    { path: '/spinner', component: Spinner },
  ],
});
