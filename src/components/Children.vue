<template>
  <div class="children">
    <Child v-for="child in children" :key="child.id" :child="child" />
  </div>
</template>

<script>
import Child from './Child.vue';
import { mapState } from 'vuex';

export default {
  name: 'Children',
  components: {
    Child,
  },
  computed: mapState(['children']),
};
</script>

<style scoped>
.children {
  margin: 10px auto;
  display: grid;
  width: 100%;
  max-width: 580px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
