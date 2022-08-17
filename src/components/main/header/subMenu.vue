<template>
  <a-sub-menu :key="menuInfo.key">
    <template #title>
      {{ menuInfo.name }}
    </template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <!-- {{item.name}} -->
          <router-link :to="item.path"> {{ item.name }}</router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "subMenu"
});
</script>

<script setup>

defineProps({
  menuInfo: {
    type: Object,
    default: () => {},
  },
  onTitleClick: {
    type: Function,
    default: () => {},
  },
});

</script>

<style>
</style>