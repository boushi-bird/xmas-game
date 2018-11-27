import Vue from 'vue';
import App from './App.vue';
import store from './store/';
import './main.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

document.addEventListener('dragstart', event => {
  const { target } = event;
  const draggable = target.getAttribute('draggable');
  // 明示的にdraggableにしている要素以外ドラッグ禁止
  if (!draggable || draggable === 'auto') {
    event.preventDefault();
  }
});
