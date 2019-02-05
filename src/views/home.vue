<template>
<div>
    <div class="home-header-bg"/>
    <div class="container" style="margin-top: -280px;">
      <div class="container page-title d-flex align-items-center">
        <div class="row flex-column page-title-padding-fix">
          <h3 class="page-title-yellbold">{{ $t("message.pageheader.home.title") }}</h3>
          <h3 class="page-subtitle">{{ $t("message.pageheader.home.subtitle") }}</h3>
        </div>
      </div>
      <div class="slide-div" style="overflow: hidden;">
        <homeslide
        pic1="/static/img/01.jpg"
        pic2="/static/img/02.jpg"
        pic3="/static/img/03.jpg"
        >
        </homeslide>
      </div>
    </div>
    <div class="container">
      <div class="row ql-div">
        <div class="col-md-6 quicklink-div">
          <div class="container card">
            <block
              link="/research"
              img="/static/img/home/ql/lab.jpg"
              :title="quicklink1"
              :description="quicklink1sub"
            />
          </div>
        </div>
        <div class="col-md-6 quicklink-div">
          <div class="container card">
            <block
              link="/about"
              img="/static/img/home/ql/team.jpg"
              :title="quicklink2"
              :description="quicklink2sub"
            />
          </div>
        </div>
      </div>
      <div class="row ql-div">
        <div class="col-md-6 quicklink-div">
          <div class="container card">
            <block
              link="/about"
              img="/static/img/home/ql/aboutus.jpg"
              :title="quicklink3"
              :description="quicklink3sub"
            />
          </div>
        </div>
        <div class="col-md-6 quicklink-div">
          <div class="container card">
            <block
              link="/research"
              img="/static/img/home/ql/contact.jpg"
              :title="quicklink4"
              :description="quicklink4sub"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="z-index: 1;">
      <div class="container" >
        <div class="row flex-column page-title-padding-fix section-div">
          <h3 class="section-title">{{ $t("message.section.news") }}</h3>
          <h3 class="section-subtitle">{{ $t("message.section.news2") }}</h3>
        </div>
        <div class="row card-slider" style="margin-bottom: 20px;">
          <div class="news-card-div firstcard">
            <newsblock
            image="/static/img/news/news1.jpg"
            title="ตัวอย่างข่าว 1"
            description="รายละเอียดของข่าวจะเขียนตรงนี้ เขียนได้ประมาณ 2 บรรทัดจะพอดี"
            link="https://google.com"
          /></div>
          <div class="news-card-div ">
            <newsblock
            image="/static/img/news/news5.jpg"
            title="ตัวอย่างข่าว 2"
            description="รายละเอียดของข่าวจะเขียนตรงนี้ เขียนได้ประมาณ 2 บรรทัดจะพอดี"
          /></div>
          <div class="news-card-div ">
            <newsblock
            image="/static/img/news/news3.jpg"
            title="งานวิจัยใหม่สุดว้าว"
            description="รายละเอียดของข่าวจะเขียนตรงนี้ เขียนได้ประมาณ 2 บรรทัดจะพอดี"
          /></div>
          <div class="news-card-div ">
            <newsblock image="/static/img/news/news4.jpg"
            title="เรื่องของผึ้งไทย"
            description="รายละเอียดของข่าวจะเขียนตรงนี้ เขียนได้ประมาณ 2 บรรทัดจะพอดี"
          /></div>
          <div class="news-card-div ">
            <newsblock
            image="/static/img/news/news1.jpg"
            title="หัวข้อข่าว จะ 2 บรรทัดก็ได้"
            description="ขนาดรูปไม่สำคัญเพราะขนาดที่แสดงจะแสดงตามปริมาณของข้อความ"
          /></div>
          <div class="news-card-div ">
            <newsblock
            image="/static/img/news/news2.jpg"
            title="ตัวอย่างข่าว 3"
            description="รายละเอียดของข่าวจะเขียนตรงนี้ แต่ถ้า 3 บรรทัดรูปก็จะเล็กลงแทน เพราะล็อคขนาดของกล่องแสดงไว้"
            /></div>
        </div>
        </div>
    </div>
    <div class="container" style="z-index: 1;">
      <div class="container" >
        <div class="row page-title-padding-fix section-div ">
          <div class="col-12" style="padding: 0; margin: 0;">
            <h3 class="section-title">{{ $t("message.section.research") }}</h3>
            <h3 class="section-subtitle">{{ $t("message.section.research2") }}</h3>
          </div>
          <!-- <div class="col-6 d-flex justify-contennt-end">
            <i class="fa fa-file-text" aria-hidden="true"></i>
            <h3 class="section-subtitle">งานวิจัยทั้งหมด</h3>
          </div> -->
        </div>
        <div class="col-12" style="margin-bottom: 30px; padding: 0px;">
          <papertable/>
        </div>
      </div>
    </div>
    <div class="container-fluid survey-home-bg" style="z-index: -100;">
      <div class="container">
        <div class="container d-flex align-items-center">
          <div class="container">
            <div class="row flex-column survey-div d-flex align-items-center">
              <h3 class="survey-subtitle">{{ $t("message.survey.title") }}</h3>
              <h3 class="survey-title">{{ $t("message.survey.title_bold") }}</h3>
              <button class="survey-btn" type="submit">{{ $t("message.survey.btn") }}</button>
            </div>
          </div>
        </div>
        <div class="container" style="padding: 30px 0px 30px 0px ;">
          <div class="row">
            <div class="col-md-6">
              <p>{{ $t("message.connect.connect_text") }}</p>
              <div class="d-flex flex-row" style="margin-top: 10px;">
                <div class="p-2">
                  <a href="https://www.facebook.com/nhbeekmutt" target="_blank">
                    <mdb-icon fab icon="facebook-square" class="socialicon fb"/>
                  </a>
                </div>
                <div class="p-2">
                  <a href="https://www.twitter.com/nhbeekmutt" target="_blank">
                    <mdb-icon fab icon="twitter" class="socialicon twitter"/>
                  </a>
                </div>
                <div class="p-2">
                  <a href="https://www.youtube.com/nhbeekmutt" target="_blank">
                    <mdb-icon fab icon="youtube" class="socialicon youtube"/>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <p>{{ $t("message.connect.email_text") }}</p>
              <div class="d-flex flex-row" style="margin-top: 10px;">
                <div class="col" style="padding: 0px 0px 0px 0px;">
                  <form class="example" action="/action_page.php">
                    <input type="text" :placeholder="emailsubph" name="search">
                    <button type="submit">
                      <mdb-icon icon="envelope" />
                    </button>
                  </form>
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
import layout_default from '@/layouts/layout_web.vue'
import papertable from '@/components/papertable.vue'
import newsblock from '@/components/newsblock.vue'
import block from '@/components/quicklink.vue'
import homeslide from '@/components/homeslide.vue'
import {
  mdbIcon
} from 'mdbvue'
import Vue from 'vue'
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)
export default {
  name: 'home',
  created() {
    this.$emit(`update:layout`, layout_default);
  },
  components: {
    block,
    homeslide,
    newsblock,
    papertable,
    mdbIcon
  },
  computed: {
    quicklink1: function () {
      return this.$t('message.quicklink.link1')
    },
    quicklink1sub: function () {
      return this.$t('message.quicklink.link1sub')
    },
    quicklink2: function () {
      return this.$t('message.quicklink.link2')
    },
    quicklink2sub: function () {
      return this.$t('message.quicklink.link2sub')
    },
    quicklink3: function () {
      return this.$t('message.quicklink.link3')
    },
    quicklink3sub: function () {
      return this.$t('message.quicklink.link3sub')
    },
    quicklink4: function () {
      return this.$t('message.quicklink.link4')
    },
    quicklink4sub: function () {
      return this.$t('message.quicklink.link4sub')
    },
    emailsubph: function () {
      return this.$t('message.connect.email_ph')
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style scpoed>
.hover:hover{
  transition-duration: 0.3s;
  transform: scale(1.1);
}
.section-div{
    border: solid;
    border-color: #E3B800;
    border-width: 0px 0px 0px 5px;
    margin: 19px 0px 20px 0px;
}
.section-title{
  font-size: 30px;
  color: #E3B800;
  font-weight: 400;
  z-index: 3;
}
.section-subtitle{
  font-size: 20px;
  color: #5D5D5D;
  font-weight: 100;
  z-index: 3;
}
.card {
  padding: 0;
  width: 100%;
  background-color: white;
  height: auto;
  border-radius: 5px !important;
  border: 0;
  -webkit-box-shadow: 0px 2px 5px -1px #999;
  -moz-box-shadow: 0px 2px 5px -1px #999;
  box-shadow: 0px 2px 5px -1px #999;
  overflow: hidden;
}

.card:hover {
  padding: 0;
  width: 100%;
  background-color: white;
  height: auto;
  border-radius: 5px !important;
  -webkit-box-shadow: 0px 2px 5px -1px #999;
  -moz-box-shadow: 0px 2px 5px -1px #999;
  box-shadow: 0px 2px 5px -1px #999;
  overflow: hidden;
  border: 0;
}

.socialicon{
  font-size: 40px;
}
.fb{
  color: #707070;
  transition-duration: 0.2s;
}
.fb:hover{
  color: #3b5998;
  transition-duration: 0.2s;
  transform: scale(1.1);
}
.twitter{
  color: #707070;
  transition-duration: 0.2s;
}
.twitter:hover{
  color: #1DA1F2;
  transition-duration: 0.2s;
  transform: scale(1.1);
}
.youtube{
  color: #707070;
  transition-duration: 0.2s;
}
.youtube:hover{
  color: #ff0000;
  transition-duration: 0.2s;
  transform: scale(1.1);
}

.news-column{
  background-color: white;
  height: auto;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  -webkit-box-shadow: 0px 2px 5px -1px #999;
  -moz-box-shadow: 0px 2px 5px -1px #999;
  box-shadow: 0px 2px 5px -1px #999;
}
.card-slider{
  height: auto;
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.news-card-div{
  width: 250px;
  height: auto;
  margin: 0px 10px 10px 10px;
  padding: 0px;
  flex: 0 0 auto;
}
/* .scrolling-wrapper {
  &::-webkit-scrollbar {
    display: none;
  }
} */

.firstcard{
  margin-left: 3px !important;
}
</style>
