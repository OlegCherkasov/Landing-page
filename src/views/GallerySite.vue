<template>
  <div class="">
    <DoubleTitle title="Gallery" />
    <div
      class=""
      v-for="(image, index) in images"
      :key="index"
      :index="index + 1"
    >
      <img
        :src="require(`@/assets/gallery/gallery${index}.png`)"
        alt="foto repair"
      />
    </div>
  </div>
</template>

<script>
import DoubleTitle from "@/components/DoubleTitle.vue";

export default {
  name: "GallerySite",
  components: { DoubleTitle },
};
</script>

<style>
</style>