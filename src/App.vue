<template>
  <div id="app">
    <Santa />
    <Children />
  </div>
</template>

<script>
import Santa from './components/Santa.vue';
import Children from './components/Children.vue';

export default {
  name: 'app',
  components: {
    Santa,
    Children,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: auto;
}
</style>
