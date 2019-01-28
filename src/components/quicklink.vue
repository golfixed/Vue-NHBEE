<template>
<router-link :to="link" @click.native="$scrollToTop" class="block">
  <div class="quicklink d-flex align-items-center justify-content-center" :style="'background-image:url(' + img + ')'">
    <div class="row d-flex flex-column justify-content-center align-items-center">
      <h4 class="title">{{ title }}</h4>
      <h5 class="descript">{{ description }}</h5>
    </div>
  </div>
</router-link>

</template>

<script>
export default {
  name: 'block',
  props: ['link', 'img', 'title', 'description'],
  components: {
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
@media (max-width: 425px){
  .title{
    margin: 30px 0px 5px 0px !important;
    font-size: 20px !important;
    color: white !important;
  }
  .descript{
    margin: 5px 0px 30px 0px !important;
    color: white !important;
    font-size: 16px !important;
  }
}
.title{
  margin: 60px 0px 5px 0px;
  color: white;
  font-size: 25px;
}
.descript{
  margin: 0px 0px 70px 0px;
  color: white;
  font-size: 20px;
}

.quicklink{
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition-duration: 0.2s;
  filter: grayscale(40%);
}
.quicklink:hover{
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition-duration: 0.2s;
  transform: scale(1.1);
  filter: grayscale(0%);
}

.quicklink:active {
  transform: scale(1);
}
</style>
