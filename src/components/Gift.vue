<template>
  <div class="gift">
    <img :src="gift.image" />
    <div class="protect-image"></div>
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
  position: relative;
  min-width: 90px;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gift img {
  max-width: 80px;
  height: 80px;
  -webkit-touch-callout: none;
}

.protect-image {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0;
  border: 0;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>
