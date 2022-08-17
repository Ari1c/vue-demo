<template>
  <a-layout class="yp-layout">
    <a-layout-header class="yp-layout-header">
      <HeaderView />
    </a-layout-header>
    <a-layout-content class="yp-layout-content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="yp-layout-footer">
        Footer
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import {
  useRouter,
  useRoute
} from 'vue-router';
import HeaderView from './header/header.vue';


export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      let screenWidth = document.body.clientWidth;

      if (screenWidth > 640) {
        console.log(111)
      }
    }) 

    // const toLogin = (() => {
    //   router.push({
    //     name: 'Login'
    //   })
    // })

    // return {
    //   toLogin
    // }
  },
  components: {
    HeaderView,
}
})

</script>

<style scoped lang="scss">
.yp-layout {
  .yp-layout-header {
    clear: both;
    position: fixed;
    width: 100%;
    z-index: 99999;
    background-color: #fff;
  }
  .yp-layout-content {
    margin-top: 64px;
    // height: calc(100vh - 134px);
  }
  .yp-layout-footer {
    z-index: 9999;
    background-color: #666;
  }
}
</style>