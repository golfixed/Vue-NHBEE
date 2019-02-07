<template>
    <Slider
    ref="Slider"
    direction="horizontal"
    :mousewheel-control="true"
    :performance-mode="true"
    :pagination-visible="true"
    :pagination-clickable="true"
    :loop="true"
    :speed="500"
    @slide-change-start="onSlideChangeStart"
    @slide-change-end="onSlideChangeEnd">
      <div style="overflow: hidden; border-radius: 5px;"><img :src="pic1" style="width: 100%;"/></div>
      <div style="overflow: hidden; border-radius: 5px;"><img :src="pic2" style="width: 100%;"/></div>
      <div style="overflow: hidden; border-radius: 5px;"><img :src="pic3" style="width: 100%;"/></div>
  </Slider>
</template>

<script>
import Slider from 'vue-plain-slider'
export default {
  name: 'homeslide',
  props: ['pic1', 'pic2', 'pic3', 'pic4'],
  components: {
    Slider
  },
  methods: {
    onSlideChangeStart (currentPage, el) {
      console.log('onSlideChangeStart', currentPage, el);
    },
    onSlideChangeEnd (currentPage, el) {
      console.log('onSlideChangeEnd', currentPage, el);
    }
  }
}
</script>
<style scoped>
.slider {
  height: auto;
}
</style>
