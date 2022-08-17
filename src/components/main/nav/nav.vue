<template>
  <Carousel class="carousel-background" autoplay>
    <div v-for="item in 4" :key="item">
      <h1>
        {{item}}
      </h1>
    </div>
  </Carousel>
</template>

<script>
import {
  Carousel
} from 'ant-design-vue';

import { defineComponent } from 'vue';

export default defineComponent({
  setup() {

  },
  components: {
    Carousel
  }
})
</script>

<style scoped lang="scss">
  .carousel-background {
    height: 300px;
    background-color: #999;
    
    
    div {
      height: 300px;
  
    }
  }
</style>