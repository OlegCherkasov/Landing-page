<template>
  <div>
    <p class="subtitle mainFont">{{ subtitle }}</p>
    <h1 class="title basicFont">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "DoubleTitle",

  props: ["title", "subtitle"],
  // data() {
  //   return {
  //     subtitle: "lorem",
  //     title: "Lorem",
  //   };
  // },
};
</script>

<style scoped>
.subtitle {
  font-size: 30px;
  font-weight: 300;
  line-height: 37px;
  color: #4f4f4f;
}

.title {
  /* font-size: 104px; */
  font-size: 90px;
  font-weight: 900;
  line-height: 96px;
  color: #eb5757;
}
</style>>
