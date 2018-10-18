var imported = document.createElement('script');
imported.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';
document.head.appendChild(imported);

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
