<template>
  <div class="gift">
    <img :src="gift.image" />
  </div>
</template>

<script>
export default {
  name: 'Gift',
  props: {
    gift: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.gift {
  min-width: 110px;
  min-height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gift img {
  max-width: 100px;
  max-height: 100px;
}
</style>
