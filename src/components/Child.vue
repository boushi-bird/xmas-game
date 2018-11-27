<template>
  <div class="child">
    <div
      class="sock"
      @dragover="giftDragover"
      @drop="giftDrop"
      >
      <Gift :gift="child.sock" v-if="child.sock" />
    </div>
    <img class="face" :src="faceImage" />
    <div class="wish" v-if="showWish">
      <img :src="child.wish.image" />
    </div>
  </div>
</template>

<script>
import Gift from './Gift.vue';

export default {
  name: 'Child',
  components: {
    Gift,
  },
  props: {
    child: {
      type: Object,
      required: true,
    },
  },
  computed: {
    faceImage() {
      return this.child.faceAssets[this.child.emotion];
    },
    showWish() {
      return this.child.wish && this.child.emotion !== 'laugh';
    },
  },
  methods: {
    giftDragover($event) {
      if (!this.child.wish || this.child.sock) {
        return;
      }
      $event.preventDefault();
      const { dataTransfer } = $event;
      dataTransfer.dropEffect = 'link';
    },
    giftDrop($event) {
      const { dataTransfer } = $event;
      const giftId = dataTransfer.getData('text');
      this.$store.commit({
        type: 'present',
        giftId,
        childId: this.child.id,
      });
    },
  },
};
</script>

<style scoped>
.child {
  display: flex;
  align-items: center;
  position: relative;
  min-width: 320px;
  max-width: 400px;
  min-height: 200px;
}

img.face {
  max-width: 200px;
  max-height: 200px;
}

.sock {
  position: absolute;
  left: 0;
  background-image: url(../assets/sock.png);
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 150px;
  min-height: 150px;
  text-align: center;
}

.face {
  position: absolute;
  right: 20px;
}

.wish {
  position: absolute;
  padding: 5px;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background-image: url(../assets/wish.png);
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
}

.wish img {
  max-height: 50px;
  -webkit-filter: brightness(0%);
  filter: brightness(0%);
}
</style>
