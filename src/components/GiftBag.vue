<template>
  <div class="gift-bag">
    <div
      v-for="gift in gifts"
      :key="gift.id"
      draggable="true"
      @dragstart="giftDragStart($event, gift)"
      >
      <Gift :gift="gift" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Gift from './Gift.vue';

export default {
  name: 'GiftBag',
  components: {
    Gift,
  },
  computed: mapState(['gifts']),
  methods: {
    giftDragStart($event, gift) {
      const { dataTransfer } = $event;
      dataTransfer.effectAllowed = 'link';
      dataTransfer.setData('text', gift.id);
    },
  },
};
</script>

<style scoped>
.gift-bag {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  border: solid 3px black;
  border-radius: 20px;
}
</style>
