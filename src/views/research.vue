<template>
  <div>
    <div class="research-header-bg"/>
    <div class="container top-fix">
      <div class="container page-title d-flex align-items-center">
        <div class="row flex-column page-title-padding-fix">
          <h3 class="page-title-yellbold">{{ $t("message.pageheader.research.title") }}</h3>
          <h3 class="page-subtitle">{{ $t("message.pageheader.research.subtitle") }}</h3>
        </div>
      </div>
      <div class="page-body" style="overflow: hidden;">
        <div class="container">
          <div class="row body-padding">
            <div class="col-12" style="    padding-right: 0px; padding-left: 0px;">
              <div class="input-group md-form form-sm form-2 pl-0" style="    margin-top: 0rem;">
                <input
                  class="form-control my-0 py-1 lime-border"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                >
                <div class="input-group-append">
                  <span class="input-group-text lime lighten-2" id="basic-text1">
                    <i class="fas fa-search text-grey" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <mdb-list-group style="margin-bottom: 20px;">
                <mdb-list-group-item :action="true" href="#">
                  งานวิจัยเกี่ยวกับระบบสืบพันธ์ของผึ้ง
                  <a
                    href="/static/file/research/nhbee.pdf"
                    target="_blank"
                  >
                    <button class="open">OPEN</button>
                  </a>
                </mdb-list-group-item>
                <mdb-list-group-item :action="true" href="#">
                  วิจัยอาณาจักรของผึ้ง
                  <button class="open">OPEN</button>
                </mdb-list-group-item>
                <mdb-list-group-item :action="true" href="#">
                  การทำงานของระบบประสาทของผึ้ง
                  <button class="open">OPEN</button>
                </mdb-list-group-item>
                <mdb-list-group-item :action="true" href="#">
                  งานวิจัยเกี่ยวกับความเหมือนหรือแตกต่างของผึ้งไทย และผึ้งชันโรง
                  <button
                    class="open"
                  >OPEN</button>
                </mdb-list-group-item>
                <mdb-list-group-item :action="true" href="#">
                  งานวิจัยเกี่ยวกับรังผึ้งหลวงไทยในจังหวัดขอนแก่น
                  <button class="open">OPEN</button>
                </mdb-list-group-item>
              </mdb-list-group>

              <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                  <nav>
                    <mdb-pagination>
                      <mdb-page-item disabled>First</mdb-page-item>
                      <mdb-page-nav prev disabled></mdb-page-nav>
                      <mdb-page-item active>1</mdb-page-item>
                      <mdb-page-item>2</mdb-page-item>
                      <mdb-page-item>3</mdb-page-item>
                      <mdb-page-item>4</mdb-page-item>
                      <mdb-page-item>5</mdb-page-item>
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
  </div>
</template>
<script>
import {
  mdbListGroup,
  mdbListGroupItem,
  mdbPagination,
  mdbPageNav,
  mdbPageItem
} from "mdbvue";
import layout_default from "@/layouts/layout_web.vue";
export default {
  name: "research",
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbPagination,
    mdbPageNav,
    mdbPageItem
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
.research-header-bg {
  height: 280px;
  background-image: url("/static/img/research/bg.jpg");
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
  margin: 10px 10px 30px 10px;
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
