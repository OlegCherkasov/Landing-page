<template>
  <div class="doubleTitle" :class="{ noHeader: !isHeader }">
    <p class="subtitle mainFont">{{ isHeader ? subtitleHeader : subtitle }}</p>
    <!-- <p class="subtitle mainFont">{{ isHeader ? "lorem" : "only the best" }}</p> -->
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
.doubleTitle {
  height: 134px;
}

.noHeader {
  margin-left: 12vw;
}

.subtitle {
  font-size: 30px;
  font-weight: 300;
  line-height: 37px;
  color: #4f4f4f;
}

.title {
  font-size: 85px;
  font-weight: 900;
  line-height: 96px;
  color: #eb5757;
}

.title__header {
  font-size: 104px;
}
</style>>
