<template>
  <!-- <div>
    <mdb-carousel :interval="8000" showControls showIndicators >
      <mdb-carousel-item img :src=" pic3 " alt="1st slide" class="active"  />
      <mdb-carousel-item img :src=" pic1 " alt="2nd slide" />
      <mdb-carousel-item img :src=" pic2 " alt="3rd slide" />
    </mdb-carousel>
  </div> -->
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
// import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue'
export default {
  name: 'homeslide',
  props: ['pic1', 'pic2', 'pic3', 'pic4'],
  components: {
    // mdbCarousel,
    // mdbCarouselItem,
    // mdbCarouselCaption
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
