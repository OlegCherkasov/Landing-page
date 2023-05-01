<template>
  <div class="gallery">
    <DoubleTitle title="Gallery" />
    <div class="gallery__img">
      <img
        v-for="index in amountImages"
        :key="index"
        :src="require(`@/assets/gallery/gallery${index}.png`)"
        alt="foto repair"
        height="282"
      />
    </div>
  </div>
</template>
<script>
import DoubleTitle from "@/components/DoubleTitle.vue";

export default {
  name: "GallerySite",
  components: { DoubleTitle },
  data() {
    return {
      amountImages: 8,
    };
  },
};
</script>

<style scoped>
.gallery {
  margin-top: 40px;
}

.gallery__img {
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>