import Vue from 'vue';
import Wonderous from './Wonderous.vue';
import './registerServiceWorker';

var vm = new Vue({
    render: h => h(Wonderous),
}).$mount("#wonderous-app");
