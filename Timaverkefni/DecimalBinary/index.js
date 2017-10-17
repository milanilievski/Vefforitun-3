var app = new Vue({
  el: '#app',
  data: {
    decimal: '',
    
  },
  computed: {
    binary: {
      get: function () {
        if (this.decimal !== '') return (this.decimal >>> 0).toString(2);
        return '';
      },
      
      set: function (newValue) {
        if (newValue !== '') {
          this.decimal = parseInt(newValue, 2);
        } else {
          this.decimal = '';
        }
      },
    },

    decimal: {
      get: function () {
        if (this.binary !== '') return (this.binary >>> 0).toString(2);
        return '';
      },
      
      set: function (newValue) {
        if (newValue !== '') {
          this.binary = parseInt(newValue, 2);
        } else {
          this.binary = '1';
        }
      },
    }
  },
});