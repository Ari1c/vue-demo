<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, reactive, watch } from "vue";

// import {
//   toLogin
// } from '@/request/loginApi';

import { menuData, getSubmenuKeys } from "@/common/menuData.js";
import SubMenu from './subMenu.vue';

console.log(menuData, 'menuData')

const route = useRoute();
const router = useRouter();

console.log(router.getRoutes(), route.name, location, 'getRoutes')

const state = reactive({
  selectedKeys: [route.name || 'main' || location.pathname.replaceAll('/', '')],
  openKeys: ["main", 'feature', 'partner', 'product-detail', 'contact'],
  rootSubmenuKeys: getSubmenuKeys(),
});

onMounted(() => {
  // toLogin({
  //   username: 'czm',
  //   password: 'asd'
  // }).then(res => {
  //   console.log('res: ====', res)
  // }).catch(err => {
  //   console.log('err: ====', err)
  //   throw err;
  // })
})

const onOpenChange = (keys) => {
  const latestOpenKey = keys.find((key) => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = keys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};

watch(
  () => route.name,
  (name) => {
    console.log('name: --', name)
    state.selectedKeys = [name];
  }
);
</script>

<template>
  <div class="yp-slidebar">
    <div class="yp-slider-content">
      <div class="yp-logo"><img src="@/assets/logo.png" alt=""></div>
      <div>
        <a-menu
          class="slidebar-menu"
          mode="horizontal"
          :openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          @openChange="onOpenChange"
        >
          <template v-for="item in menuData" :key="item.key">
            <template v-if="!item.children">
                <a-menu-item :key="item.key">
                  <!-- {{ item.name }} -->
                  <router-link :to="item.path">{{item.name}}</router-link>
                </a-menu-item>
              </template>
              <template v-else>
                <sub-menu :key="item.key" :menu-info="item" />
              </template>
          </template>
        </a-menu>
      </div>
    </div>
  </div>
  <!-- <Menu> -->
  <!-- </Menu> -->

</template>

<style scoped lang="scss">
  .yp-slidebar {
    height: 100%;
    display: flex;
    justify-content: center;
    .yp-slider-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      // background-color: #f5f5f5;
      .yp-logo {
        img {
          height: 100%;
        }
      }
    }
  }
</style>