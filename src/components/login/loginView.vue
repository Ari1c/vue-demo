<template>
  <div @click.stop="message">
    <h1>
      login
    </h1>
    <a-button @click.stop="getData">加载数据</a-button>
  </div>

</template>

<script>


import { useRouter } from "vue-router";
import { defineComponent, getCurrentInstance, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const router = useRouter();
    const { proxy } = getCurrentInstance();


    const toHome = (() => {
      router.push({
        name: 'Main'
      })
    })

    const getData = async () => {
      const axios = proxy?.$axios;

      let result;

      try {
        result = await axios.post('login/loginAction', {
          username: 'czm',
          password: 'asdzxc'
        });

        return result;
      } catch (e) {
        proxy?.$message.error('获取失败，请重试')
      }
    }

    onMounted(() => {

    })

    return {
      toHome,
      btn: proxy.$Button,
      message: () => {
        proxy.$message.info('这是一条 message')
      },
      getData
    }
  },
  components: {
  }
})
</script>

<style scoped>

</style>
