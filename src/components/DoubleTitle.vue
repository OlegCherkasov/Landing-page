<template>
  <div :class="{ noHeader: !isHeader }">
    <p class="subtitle mainFont">{{ isHeader ? subtitleHeader : subtitle }}</p>
    <h1 class="title basicFont" :class="{ title__header: isHeader }">
      {{ title }}
    </h1>
  </div>
</template>
<script>
export default {
  name: "DoubleTitle",

  props: ["title", "isHeader"],
  data() {
    return {
      subtitleHeader: "lorem",
      subtitle: "only the best",
    };
  },
};
</script>

<style scoped>
.noHeader {
  text-align: center;
}

.subtitle {
  font-size: 30px;
  font-weight: 300;
  line-height: 37px;
  color: #4f4f4f;
}

.title {
  font-size: 42px;
  font-weight: 900;
  line-height: 50px;
  color: #eb5757;
}

.title__header {
  font-size: 80px;
  line-height: 56px;
}

@media (min-width: 500px) {
  .title {
    font-size: 85px;
    font-weight: 900;
    line-height: 96px;
  }

  .title__header {
    font-size: 104px;
  }

  .noHeader {
    margin-left: 12vw;
    text-align: start;
  }
}
</style>
