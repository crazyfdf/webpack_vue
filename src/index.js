require('./css/normal.css')
require('./css/special.less')
import Vue from 'vue'
import App from './vue/App'
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})