import Vue from 'vue'
import MyComponent from './MyConpoment.jsx'
new Vue({
  el: '#app',
  components: {
    MyComponent
  },

  render() {
    return <MyComponent text='hello world' />
  }
})
