

require('./bootstrap');

window.Vue = require('vue');

Vue.component('mi-pensamiento-component', require('./components/mipensamientocomponent.vue').default);
Vue.component('form-component', require('./components/formcomponent.vue').default);
Vue.component('pensamiento-component', require('./components/pensamientocomponent.vue').default);


const app = new Vue({
    el: '#app',
});
