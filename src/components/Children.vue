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
  max-width: 640px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>
