<template>
  <div>
    <mdb-carousel :interval="8000" showControls showIndicators >
      <mdb-carousel-item img :src=" pic3 " alt="1st slide" class="active"  />
      <mdb-carousel-item img :src=" pic1 " alt="2nd slide" />
      <mdb-carousel-item img :src=" pic2 " alt="3rd slide" />
    </mdb-carousel>
  </div>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue'
export default {
  name: 'homeslide',
  props: ['pic1', 'pic2', 'pic3', 'pic4'],
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption
  }
}
</script>
<style scoped>
.carousel-fade .carousel-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block !important;
  opacity: 0;
  z-index: 0;
  transition: transform 0ms ease-in-out, opacity 300ms ease-out;
}

@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}
</style>
