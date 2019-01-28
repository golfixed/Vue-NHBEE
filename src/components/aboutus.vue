<template>
  <div>
    <div class="about-header-bg"/>
    <div class="container" style="margin-top: -280px;">
      <div class="container page-title d-flex align-items-center">
        <div class="row flex-column page-title-padding-fix">
          <h3 class="page-title-yellbold">{{ $t("message.pageheader.about.title") }}</h3>
          <h3 class="page-subtitle" style="color: white !important;">{{ $t("message.pageheader.about.subtitle") }}</h3>
        </div>
      </div>
      <div class="page-body" style="overflow: hidden;">
          <div class="container" style="padding-bottom: 30px;">
            <div class="row" style="padding-top: 40px;">
              <div class="col-12">
                <h3 style="text-align: center;">{{ $t("message.page2_about.title") }}</h3>
              </div>
            </div>
            <div class="row" style="padding: 20px;">
              <div class="col-md-8">
                <div><p class="topic">{{ $t("message.page2_about.paragraph1title  ") }}</p></div>
                <div><p>{{ $t("message.page2_about.paragraph1") }}</p></div>
              </div>
              <div class="col-md-4 d-flex align-items-center justify-content-center">
                <img class="p-2" src="/static/img/logo.png" style="width: 40%;"/>
                <img class="p-2" src="/static/img/KMUTT-LOGO.png"  style="width: 40%;"/>
              </div>
            </div>
            <div class="row" style="padding: 20px ;">
              <div class="col-md-4"><img src="/static/img/about/pic2.jpg" class="about-pic"/></div>
              <div class="col-md-4"><img src="/static/img/about/pic3.jpg" class="about-pic"/></div>
              <div class="col-md-4"><img src="/static/img/about/pic4.jpg" class="about-pic"/></div>
            </div>
            <div class="row" style="padding: 20px ;">
              <div class="col-md-12">
                <div><p>{{ $t("message.page2_about.paragraph2") }}</p></div>
              </div>
              <div class="col-md-12">
                <div><p class="topic">{{ $t("message.page2_about.paragraph3title") }}</p></div>
                <div><p>{{ $t("message.page2_about.paragraph3") }}</p></div>
              </div>
              <div class="col-md-12">
                <div><p class="topic">{{ $t("message.page2_about.paragraph4title") }}</p></div>
                <div>
                  <p>{{ $t("message.page2_about.paragraph4") }}</p>                
                  <li>{{ $t("message.page2_about.paragraph4_item1") }}</li>
                  <li>{{ $t("message.page2_about.paragraph4_item2") }}</li>
                  <li>{{ $t("message.page2_about.paragraph4_item3") }}</li>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ParallaxContainer from '@/components/ParallaxContainer.vue'
// import ParallaxElement from '@/components/ParallaxElement.vue'
export default {
  name: 'aboutus',
  components: {
    // ParallaxContainer,
    // ParallaxElement,
  }
}
</script>
<style scpoed>
.about-pic{
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic{
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  color:#E3B800;
  font-weight: bold;
  font-size: 20px;
  border-color: #E3B800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.about-header-bg {
  height: 280px;
  background-image: url("/static/img/about/aboutimg.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.col-style{
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
.page-body {
  background-color: white;
  height: auto;
  border-radius: 5px;
  margin: 10px 10px 30px 10px;
  -webkit-box-shadow: 0px 2px 10px -1px #999;
  -moz-box-shadow: 0px 2px 10px -1px #999;
  box-shadow: 0px 2px 10px -1px #999;
}
.aboutimg-div{
  border-radius: 5px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

/* .App__example-single-element {
  height: 20em;
  background-color: lightblue;
}

.App__example-double-element {
  display: flex;
  height: 20em;
  background-color: lightgreen;
}

.App__example-element {
  padding: 1em;
  max-width: 12em;
} */
</style>
