Vue.component("button-counter", {
  data: function() {
    return {
      counter: 0
    };
  },

  methods: {
    incrementCounter: function() {
      this.counter++;
      this.$emit('increment');
    }
  },

  template: `
    <button @click="incrementCounter" class="button is-primary">
        {{counter}}
    </button> 
  `
});




var app = new Vue({
  el: '#app',
  data: {
    total: 0
  }
})