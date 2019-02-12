<template>
  <div>
    <div class="news-header-bg"/>
    <div class="container top-fix">
      <div class="container page-title d-flex align-items-center">
        <div class="row flex-column page-title-padding-fix">
          <h3 class="page-title-yellbold">{{ $t("message.pageheader.news.title") }}</h3>
          <h3 class="page-subtitle">{{ $t("message.pageheader.news.subtitle") }}</h3>
        </div>
      </div>
      <div class="page-body" style="overflow: hidden;">
        <div class="container">
          <div class="row">
            <div class="container">
              <row
              title="Honeybees have a noontime break from their dancing activity"
              description="This finding showed that Apis florea bees largely avoid flying off between 12:00 h and 13:00 h on the one hand, and that their preferred departure angle of the sun is between 55๐ and 65๐ on the other. Given the difficulties of taking an accurate reading of the sun..."
              img="/static/img/news/n/n1.png"
              link="/news/article"
              />
              <row
              title="Dance language in finding new nest site and foraging"
              description="Von Frisch discovered a particularly exciting facet of honeybee biology: communication by the dance language (Fig 2). Only later, when Lindauer entered the scene, did studies on Asian honeybees gain a footing. Since then, great strides have been made with respect to foraging range versus the dance tempo that shows some of the unique properties of Asian bees..."
              img="/static/img/news/n/n2.png"
              link="/news/article"
              />
              <row
              title="Biodiversity and conservation of honeybees and stingless bees"
              description="The geographical distribution of honeybees and stingless bees in Thailand has been studied. The distribution of four of the eleven species of honeybees of the world has been investigated and record (Fig 3). Stingless bees, of which over 500 species are found, 33 species of which are found in Thailand..."
              img="/static/img/news/n/n3.png"
              link="/news/article"
              />
              <row
              title="Ant repellent resins of honeybees and stingless bees"
              description="This study was conducted to evaluate the ant repellent affect of plant resins against weaver ants, Oecophylla smaragdina (Fig 4). The resins tested were the sticky bands used by the dwarf honeybees, Apis florea and A. andreniformis, propolis from the European honeybee..."
              img="/static/img/news/n/n4.png"
              link="/news/article"
              />
            </div>
            <div class="col-12" style="margin-top: 20px;">
                    <div class="row d-flex justify-content-center">
                      <nav>
                        <mdb-pagination >
                          <mdb-page-item disabled>First</mdb-page-item>
                          <mdb-page-nav prev disabled></mdb-page-nav>
                          <mdb-page-item active>1</mdb-page-item>
                          <mdb-page-item>2</mdb-page-item>
                          <mdb-page-item>3</mdb-page-item>
                          <mdb-page-nav next></mdb-page-nav>
                          <mdb-page-item>Last</mdb-page-item>
                        </mdb-pagination>
                      </nav>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mdbPagination, mdbPageNav, mdbPageItem } from 'mdbvue'
import layout_default from '@/layouts/layout_web.vue'
import row from '@/components/news/row.vue'
export default {
  name: 'research',
  components: {
    row,
    mdbPagination,
    mdbPageNav,
    mdbPageItem,
  },
  created() {
    this.$emit(`update:layout`, layout_default);
  }
};
</script>
<style scpoed>
.top-fix {
  margin-top: -310px;
}
.pagination.pg-blue .page-item.active .page-link {
  background-color: #e1b534;
  border-radius: 50%;
  margin: 5px;
}
.lime.lighten-2 {
  background-color: #f5f5f5 !important;
  border-radius: 100px;
}
.input-group.md-form.form-sm.form-2 input.lime-border {
  border: 1px solid #e6e6e6;
  border-radius: 100px 0px 0px 100px;
  background-color: whitesmoke;
}
.list-group .list-group-item:first-child {
  border-top-left-radius: 15px !important;
  border-top-right-radius: 15px !important;
}
.list-group .list-group-item:last-child {
  border-bottom-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
}
.about-pic {
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic {
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  color: #e3b800;
  font-weight: bold;
  font-size: 20px;
  border-color: #e3b800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.news-header-bg {
  height: 280px;
  background-image: url("/static/img/news/bg.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.col-style {
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
.page-body {
  background-color: white;
  height: auto;
  border-radius: 5px;
  margin: 30px 10px 30px 10px;
  -webkit-box-shadow: 0px 2px 10px -1px #999;
  -moz-box-shadow: 0px 2px 10px -1px #999;
  box-shadow: 0px 2px 10px -1px #999;
}
.aboutimg-div {
  border-radius: 5px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.open {
  font-size: 12px;
  color: white;
  background-color: #5d8b27 !important;
  border-color: #5d8b27;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  margin-left: 0px;
  margin-right: 0px;
  border-bottom-width: 1px;
  border-radius: 1000px;
}
</style>
