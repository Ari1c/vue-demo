<template>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const toMain = (() => {
      router.push({
        name: 'main'
      })
    })

    const toLogin = (() => {
      router.push({
        name: 'Login'
      })
    })

    return {
      toMain,
      toLogin
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
body,div,ul,ol,li,dl,dd,h1,h2,h3,form,input,textarea,p,img {   //很多块级元素都有默认的外边距
    margin:0px;
    padding:0px;
}

ul { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  // .ant-layout {
  //   height: 100vh;
  // }
}
</style>
