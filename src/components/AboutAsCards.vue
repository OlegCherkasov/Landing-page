<template>
  <div class="aboutAsCard">
    <ol class="aboutAs__item basicFont">
      <li v-for="(item, index) in todos" :key="index" :text="item.text">
        <p class="">{{ index + 1 }}</p>
        <p class="text basicFont">{{ item.text }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "AboutAsCards",

  data() {
    return {
      todos: [
        {
          text: "1 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "2 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "3 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "4 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "5 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "6 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
      ],
    };
  },
};
</script>

<style>
.aboutAsCard {
  width: 300px;
}

.text {
  padding-top: 20px;
  font-weight: 500;
  color: #4f4f4f;
}

.aboutAs__item {
  list-style: none;
  color: #d89595;
}
</style>