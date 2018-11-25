<template>
  <div class="santa">
    <div class="main">
      <img :src="mainImage" />
    </div>
    <div>{{message}}<button @click="reload" v-if="failure">やり直し</button></div>
    <GiftBag />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GiftBag from './GiftBag.vue';
import { santa as santaImages } from '../assets';
const { normalImage, successImage } = santaImages;

export default {
  name: 'Santa',
  components: {
    GiftBag,
  },
  computed: {
    ...mapGetters(['gameStatus']),
    mainImage() {
      return this.gameStatus === 'success' ? successImage : normalImage;
    },
    failure() {
      return this.gameStatus === 'failure';
    },
    message() {
      switch (this.gameStatus) {
        case 'success':
          return 'Merry Christmas!';
        default:
          return 'こどもたちにプレゼントをくばろう！';
      }
    },
  },
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style scoped>
.santa {
  margin: 10px auto;
  width: 100%;
  max-width: 640px;
  text-align: center;
}

.main {
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main img {
  max-width: 500px;
  max-height: 340px;
}
</style>
