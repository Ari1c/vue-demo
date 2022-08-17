<script setup>
import { onMounted, reactive, watch } from 'vue';
import { toLogin } from '@/api/loginApi';
const state = reactive({
  solveData: [
     {
    img: 'qqq',
    title: '解决办法1',
    description: '大撒大撒大撒大苏打'
  },
  {
    img: 'www',
    title: '解决办法2',
    description: '大撒大撒大撒大苏打'
  },
  {
    img: 'eee',
    title: '解决办法3',
    description: '大撒大撒大撒大苏打'
  },
  {
    img: 'rrr',
    title: '解决办法4',
    description: '大撒大撒大撒大苏打'
  }
  ]
})

const getSolveData = () => toLogin({
    username: 'aaa',
    password: 'asd'
  }).then(res => {
    state.solveData = res;
  }).catch(e => {
    state.solveData = [{
        img: 'ooo',
        title: 'asasa',
        description: '的舞曲二的万人嗡嗡'
      }]
  })

onMounted(() => {
  // getSolveData()
})

</script>

<template>
  <div>
    <h1>一站式解决方案</h1>
  </div>
  <div class="article-solve">
    <a-row>
      <a-col v-for="item in state?.solveData" :key="item.title">
        <div class="solve-img">{{item.img}}</div>
        <div class="solve-title">{{item.title}}</div>
        <p class="solve-content">{{item.description}}</p>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="scss">
  .article-solve {
    display: flex;
    justify-content: center;
    .ant-row {
      width: 90vw;
      justify-content: space-around;
      .ant-col {
        width: 20vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 6px;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0;
        padding: 10px;
        margin: 10px;
        .solve-img {
          height: 100px;
          width: 100px;
          background-color: #f5f5f5;
          border-radius: 50%;
        }
      }
    }
  }
</style>
