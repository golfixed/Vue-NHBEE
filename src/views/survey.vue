<template>
  <div>
    <div class="header-bg-survey"/>
    <div class="container top-fix">
      <div class="container page-title d-flex align-items-center">
        <div class="row flex-column page-title-padding-fix">
          <h3 class="page-title-yellbold">{{ $t("message.pageheader.survey.title") }}</h3>
          <h3 class="page-subtitle">{{ $t("message.pageheader.survey.subtitle") }}</h3>
        </div>
      </div>
      <div class="page-body" style="overflow: hidden;">
        <div class="container">
          <div class="row body-padding">
            <div
              class="d-flex flex-column"
              style="text-align:center; width: 100%; padding: 30px 0px 40px 0px;"
            >
              <h3>แบบสัมภาษณ์ในงานวิจัยผึ้ง</h3>
              <h5>แลบวิจัยผึ้งพื้นเมือง มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี วิทยาเขตราชบุรี</h5>
            </div>
            <div style="    padding: 30px;
    border: 1px solid #ffc107;
    background-color: #ffc1070a;
    border-radius: 5px;">
              <p class="topic-2" style=" margin: 10px 0px 20px 0px !important;">คำชี้แจง</p>
              <p style=" margin-top: 0px !important; margin-bottom:0px;">
                1.&nbsp;&nbsp;&nbsp;แบบสอบถามชุดนี้มีจุดมุ่งหมายที่จะทราบข้อมูลเกี่ยวกับข้อมูลพื้นฐานของผึ้งโพรงและชันโรง
                <br>2.&nbsp;&nbsp;&nbsp;คำตอบในแบบสัมภาษณ์นี้จะนาไปใช้เพื่อการวิจัยเท่านั้น ไม่มีผลกระทบต่อสวัสดิภาพของท่าน ดังนั้นจึงใคร่ขอความร่วมมือจากท่านได้กรุณาช่วยตอบคำถามทุกข้อตรงตามความเป็นจริงที่ปฏิบัติและตรงกับความคิดเห็นของท่าน
                <br>3.&nbsp;&nbsp;&nbsp;แบบสอบถามสาหรับเกษตรกรผู้เลี้ยงผึ้งโพรงมีทั้งหมด 2 ส่วน ประกอบด้วย
                </P>
                <div style="text-indent: 2rem"> 
                <br><li>&nbsp;ส่วนที่ 1 ข้อมูลทั่วไปของเกษตรกร</li>
                <li>&nbsp;ส่วนที่ 2 ข้อมูลเกี่ยวกับการเลี้ยงผึ้งโพรงและชันโรง</li>
                </div>
                <p>
                <br>4.&nbsp;&nbsp;&nbsp;กรุณาทำเครื่องหมาย / ลงในช่องสี่เหลี่ยมหน้าข้อความที่ต้องการและเติมข้อความลงในช่องว่างตามความเป็นจริงที่ท่านปฎิบัติ
                <br>5.&nbsp;&nbsp;&nbsp;ผู้วิจัยขอขอบคุณท่านที่กรุณาตอบคำถามและให้ความร่วมมือในการจัดเก็บข้อมูลในครั้งนี้
              </p>
            </div>
            <div class="d-flex justify-content-start" style="padding-top: 30px; width: 100%;">
                <a href="#/form"><button class="next-btn">ต่อไป</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import layout_default from "@/layouts/layout_web.vue";
import { mdbIcon } from "mdbvue";
export default {
  name: "aboutus",
  components: {
    mdbIcon
  },
  created() {
    this.$emit(`update:layout`, layout_default);
  }
};
</script>
<style scpoed>
.next-btn{
    background: #efefef;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    padding: 8px 15px;
}
.mapdiv {
  overflow: hidden;
  border-radius: 5px;
  background-color: rgb(237, 237, 237);
}
.about-pic {
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic-2 {
  margin: 30px 0px 10px 0px;
  padding-left: 10px;
  color: #272727;
  font-weight: bold;
  font-size: 20px;
  border-color: #272727;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.header-bg-survey {
  height: 280px;
  background-image: url("/static/img/survey/headerbg.png");
  background-position: bottom center;
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
.top-fix {
  margin-top: -310px;
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

