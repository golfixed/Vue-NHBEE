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
            <form>
              <div
                style="width: 100%;padding: 20px; border: 1px solid #2125294a; background-color: #6c757d00; border-radius: 5px;"
              >
                <p
                  class="topic-2"
                  style=" margin: 10px 0px 20px 0px !important;"
                >ส่วนที่ 1 ข้อมูลทั่วไปของเกษตรกร</p>

                <p
                  style="padding: 10px; margin: 0px; background-color: #efefef; border-radius: 5px;"
                >1.1 ปัจจัยทางสังคม</p>

                <div class="row">
                  <div class="mg col-lg-3 col-md-6 col-sm-12">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">ชื่อ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-3 col-md-6 col-sm-12">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">สกุล</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-6 col-md-12 col-sm-12">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">ชื่อฟาร์ม</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="mg col-lg-2 col-md-4 col-sm-6">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">บ้านเลขที่</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-2 col-md-4 col-sm-6">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">หมู่ที่</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                    >
                  </div>

                  <div class="mg col-lg-2 col-md-4 col-sm-6">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">ตำบล</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-2 col-md-4 col-sm-6">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">อำเภอ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-2 col-md-4 col-sm-6">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">จังหวัด</p>
                    <select name="province" style="width:100%;">
                      <option value="กรุงเทพมหานคร" selected>กรุงเทพมหานคร</option>
                      <option value="กระบี่">กระบี่</option>
                      <option value="กาญจนบุรี">กาญจนบุรี</option>
                      <option value="กาฬสินธุ์">กาฬสินธุ์</option>
                      <option value="กำแพงเพชร">กำแพงเพชร</option>
                      <option value="ขอนแก่น">ขอนแก่น</option>
                      <option value="จันทบุรี">จันทบุรี</option>
                      <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
                      <option value="ชัยนาท">ชัยนาท</option>
                      <option value="ชัยภูมิ">ชัยภูมิ</option>
                      <option value="ชุมพร">ชุมพร</option>
                      <option value="ชลบุรี">ชลบุรี</option>
                      <option value="เชียงใหม่">เชียงใหม่</option>
                      <option value="เชียงราย">เชียงราย</option>
                      <option value="ตรัง">ตรัง</option>
                      <option value="ตราด">ตราด</option>
                      <option value="ตาก">ตาก</option>
                      <option value="นครนายก">นครนายก</option>
                      <option value="นครปฐม">นครปฐม</option>
                      <option value="นครพนม">นครพนม</option>
                      <option value="นครราชสีมา">นครราชสีมา</option>
                      <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
                      <option value="นครสวรรค์">นครสวรรค์</option>
                      <option value="นราธิวาส">นราธิวาส</option>
                      <option value="น่าน">น่าน</option>
                      <option value="นนทบุรี">นนทบุรี</option>
                      <option value="บึงกาฬ">บึงกาฬ</option>
                      <option value="บุรีรัมย์">บุรีรัมย์</option>
                      <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
                      <option value="ปทุมธานี">ปทุมธานี</option>
                      <option value="ปราจีนบุรี">ปราจีนบุรี</option>
                      <option value="ปัตตานี">ปัตตานี</option>
                      <option value="พะเยา">พะเยา</option>
                      <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
                      <option value="พังงา">พังงา</option>
                      <option value="พิจิตร">พิจิตร</option>
                      <option value="พิษณุโลก">พิษณุโลก</option>
                      <option value="เพชรบุรี">เพชรบุรี</option>
                      <option value="เพชรบูรณ์">เพชรบูรณ์</option>
                      <option value="แพร่">แพร่</option>
                      <option value="พัทลุง">พัทลุง</option>
                      <option value="ภูเก็ต">ภูเก็ต</option>
                      <option value="มหาสารคาม">มหาสารคาม</option>
                      <option value="มุกดาหาร">มุกดาหาร</option>
                      <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
                      <option value="ยโสธร">ยโสธร</option>
                      <option value="ยะลา">ยะลา</option>
                      <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
                      <option value="ระนอง">ระนอง</option>
                      <option value="ระยอง">ระยอง</option>
                      <option value="ราชบุรี">ราชบุรี</option>
                      <option value="ลพบุรี">ลพบุรี</option>
                      <option value="ลำปาง">ลำปาง</option>
                      <option value="ลำพูน">ลำพูน</option>
                      <option value="เลย">เลย</option>
                      <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                      <option value="สกลนคร">สกลนคร</option>
                      <option value="สงขลา">สงขลา</option>
                      <option value="สมุทรสาคร">สมุทรสาคร</option>
                      <option value="สมุทรปราการ">สมุทรปราการ</option>
                      <option value="สมุทรสงคราม">สมุทรสงคราม</option>
                      <option value="สระแก้ว">สระแก้ว</option>
                      <option value="สระบุรี">สระบุรี</option>
                      <option value="สิงห์บุรี">สิงห์บุรี</option>
                      <option value="สุโขทัย">สุโขทัย</option>
                      <option value="สุพรรณบุรี">สุพรรณบุรี</option>
                      <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
                      <option value="สุรินทร์">สุรินทร์</option>
                      <option value="สตูล">สตูล</option>
                      <option value="หนองคาย">หนองคาย</option>
                      <option value="หนองบัวลำภู">หนองบัวลำภู</option>
                      <option value="อำนาจเจริญ">อำนาจเจริญ</option>
                      <option value="อุดรธานี">อุดรธานี</option>
                      <option value="อุตรดิตถ์">อุตรดิตถ์</option>
                      <option value="อุทัยธานี">อุทัยธานี</option>
                      <option value="อุบลราชธานี">อุบลราชธานี</option>
                      <option value="อ่างทอง">อ่างทอง</option>
                      <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                  </div>
                  <div class="mg col-lg-2 col-md-4 col-sm-6">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">รหัสไปรษณีย์</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-2">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">วันที่ทำแบบสอบถาม</p>
                    <input
                      type="date"
                      style="border-radius: 5px; border: 1px solid #bebfc1;width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-2">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">เพศ</p>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        style="border-radius: 5px; border: 1px solid #bebfc1; margin: 0px 10px;"
                      > ชาย
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked
                        style="border-radius: 5px; border: 1px solid #bebfc1; margin: 0px 10px;"
                      > หญิง
                    </div>
                  </div>
                  <div class="mg col-lg-2">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">อายุ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-3">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >จำนวนสมาชิกในครัวเรือน</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-3">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >ระดับการศึกษาสูงสุดที่ท่านสำเร็จ</p>
                    <select name="province" style="width:100%;">
                      <option value="กรุงเทพมหานคร" selected>ประถมศึกษา</option>
                      <option value="กระบี่">มัธยมศึกษาตอนต้น</option>
                      <option value="กาญจนบุรี">มัธยมศึกษาตอนปลาย</option>
                      <option value="กรุงเทพมหานคร">อนุปริญญาหรือเทียบเท่า</option>
                      <option value="กระบี่">ปริญญาตรี</option>
                      <option value="กาญจนบุรี">สูงกว่าปริญญาตรี</option>
                      <option value="กาญจนบุรี">ความรู้อื่นๆ</option>
                    </select>
                  </div>
                  <div class="mg col-lg-4">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >ท่านเป็นสมาชิกสถาบันการเกษตรหรือไม่</p>
                    <input
                      type="radio"
                      name="is_member"
                      value="yes"
                      checked
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > เป็น
                    <input
                      type="radio"
                      name="is_member"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ไม่เป็น
                  </div>
                  <div class="mg col-lg-4">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">หากเป็น เป็นเพราะ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-4">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">จำนวนสมาชิกกี่ท่าน</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-4">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >ท่านเป็นผู้นำกลุ่ม หรือผู้นำชุมชนหรือไม่</p>
                    <input
                      type="radio"
                      name="is_leader"
                      value="yes"
                      checked
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > เป็น
                    <input
                      type="radio"
                      name="is_leader"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ไม่เป็น
                  </div>
                  <div class="mg col-lg-4">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >หากเป็น เป็นตำแหน่งอะไร</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >ท่านเคยได้รับการฝึกอบรมเกี่ยวกับการเกษตร (ปลูกพืช เลี้ยงสัตว์ ประมง) หรือการเลี้ยงผึ้งหรือไม่</p>
                    <input
                      type="radio"
                      name="is_trained"
                      value="yes"
                      checked
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > เคย
                    <input
                      type="radio"
                      name="is_trained"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ไม่เคย
                  </div>
                </div>

                <p
                  style="padding: 10px; margin: 20px 0px 0px 0px; background-color: #efefef; border-radius: 5px;"
                >1.2 ปัจจัยทางเศรษฐกิจ</p>

                <div class="row">
                  <div class="mg col-lg-3">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">อาชีพหลักของท่าน</p>
                    <select name="carieer" style="width:100%;">
                      <option value="กรุงเทพมหานคร" selected>เลี้ยงผึ้ง</option>
                      <option value="กระบี่">ทำไร่</option>
                      <option value="กาญจนบุรี">ทำสวน</option>
                      <option value="กรุงเทพมหานคร">ค้าขาย</option>
                      <option value="กระบี่">ประมง</option>
                      <option value="กาญจนบุรี">ปศุสัตว์</option>
                      <option value="กาญจนบุรี">รับราชการ</option>
                      <option value="กาญจนบุรี">รับจ้าง</option>
                      <option value="กาญจนบุรี">อื่นๆ</option>
                    </select>
                  </div>
                  <div class="mg col-lg-3">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >รายได้จากอาชีพหลักต่อพื้นที่ต่อไร่</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-3">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >รายได้กี่บาทต่อเดือน/หรือต่อรอบ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-3">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">รายได้(บาทต่อปี)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-3">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">อาชีพรองของท่าน</p>
                    <select name="carieer_bacukup" style="width:100%;">
                      <option value="กรุงเทพมหานคร" selected>เลี้ยงผึ้ง</option>
                      <option value="กระบี่">ทำไร่</option>
                      <option value="กาญจนบุรี">ทำสวน</option>
                      <option value="กรุงเทพมหานคร">ค้าขาย</option>
                      <option value="กระบี่">ประมง</option>
                      <option value="กาญจนบุรี">ปศุสัตว์</option>
                      <option value="กาญจนบุรี">รับราชการ</option>
                      <option value="กาญจนบุรี">รับจ้าง</option>
                      <option value="กาญจนบุรี">อื่นๆ</option>
                    </select>
                  </div>
                  <div class="mg col-lg-3">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >รายได้จากอาชีพรองต่อพื้นที่ต่อไร่</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-3">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >รายได้กี่บาทต่อเดือน/หรือต่อรอบ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                  <div class="mg col-lg-3">
                    <p style=" margin-top: 0px !important; margin-bottom:0px;">รายได้(บาทต่อปี)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="mg col-lg-6">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >รายได้รวมสุทธิของครัวเรือนสุทธิ (บาท/ปี)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
              </div>

              <div
                style="width: 100%;padding: 20px; border: 1px solid #2125294a; background-color: #6c757d00; border-radius: 5px; margin-top: 20px;"
              >
                <p
                  class="topic-2"
                  style=" margin: 10px 0px 20px 0px !important;"
                >ส่วนที่ 2 ข้อมูลเกี่ยวกับการเลี้ยงผึ้งโพรง/ชันโรง</p>
              </div>

              <div class="d-flex justify-content-center" style="padding-top: 30px; width: 100%;">
                <button class="clear-btn" type="clear" style="margin:0px 10px;">ลบทั้งหมด</button>
                <button class="submit-btn" type="submit" style="margin:0px 10px;">ส่งข้อมูล</button>
              </div>
            </form>
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
.next-btn {
  background: #efefef;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  padding: 8px 15px;
}
.clear-btn {
  background: #ff35471a;
  border: 1px solid #ff354796;
  border-radius: 5px;
  padding: 8px 15px;
}
.submit-btn {
  background: #28a7452b;
  border: 1px solid #388e3cc9;
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

.mg {
  margin-top: 10px;
}
</style>

