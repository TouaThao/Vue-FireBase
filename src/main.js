import Vue from 'vue'
import App from './App.vue'

//create global filter
// use filter. take in two parameter. name of the filter. and value of data that we want to
// manipulate.
Vue.filter('snippet', val =>{
  if(!val || typeof(val)!='string')return ''
  val = val.slice(0,50)
  return val
})

new Vue({
  el: '#app',
  render: h => h(App)
})
