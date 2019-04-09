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
                  style=" margin: 10px 0px 10px 0px !important;"
                >ส่วนที่ 2 ข้อมูลเกี่ยวกับการเลี้ยงผึ้งโพรง/ชันโรง</p>

                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >1. ประสบการณ์การเลี้ยงผึ้ง และ/หรือชันโรง จำนวนกี่ปี/เริ่มตั้งเเต่ปี พ.ศ./ประวัติในอดีตตั้งแต่เริ่มต้นจนถึงปัจจุบัน</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >2. จำนวนรังผึ้ง และ/หรือชันโรง ที่เลี้ยงปัจจุบัน (รัง)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >3. ท่านมีเเรงงานในครอบครัวที่เลี้ยงผึ้ง และ/หรือชันโรง มีจำนวนทั้งหมด (คน)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >4. จำนวนเเรงงานจ้างในการเลี้ยงผึ้ง และ/หรือชันโรง (คน)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >5. พื้นที่เลี้ยงผึ้ง และ/หรือชันโรง (ไร่)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >6. ชนิดของพืชอาหารในพื้นที่เลี้ยงผึ้งและ/หรือชันโรง /มีจำนวนกี่ไร่ มีทั้งหมดกี่ชนิด อะไรบ้าง (เช่น ยางพารา ปาล์มน้ำมัน ทุเรียน เงาะ มังคุด /พืชอื่นๆ)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >7. มีการย้ายรังผึ้งและ/หรือชันโรง กี่ครั้งต่อปี (ครั้งที่ย้ายรังมีพืชอาหาร /สถานที่ /ช่วงเดือน /ได้ผลผลิตน้ำผึ้ง ไขผึ้ง เกสร อื่นๆ (กก.)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >8. ผึ้งและ/หรือชันโรง ที่ท่านเลี้ยงได้มาจากที่ไหน</p>
                    <input
                      type="radio"
                      name="where"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ซื้อพันธุ์ผึ้งมาเลี้ยง
                    <input
                      type="radio"
                      name="where"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > เข้ามาอยู่เองตามธรรมชาติ
                    <input
                      type="radio"
                      name="where"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ใช้วิธีการล่อผึ้งจากธรรมชาติ
                    <input
                      type="radio"
                      name="where"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > อื่นๆ
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >9. มีการนำผึ้งและ/หรือชันโรงมาใช้ในการผสมเกสรหรือไม่ (ถ้ามี ได้แก่พืชชนิดไหน /ถ้าไม่มี มีความสนใจจะใช้หรือไม่)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >10. ฟาร์มของท่านมีปัญหาเกี่ยวกับการทิ้งรังของผึ้งโพรงและ/หรือชันโรง หรือไม่ (ถ้ามี ฤดูกาลไหน/จากจำนวนรังเดิม/จำนวนรังที่ทิ้ง/ปี พ.ศ.ใด หรือถ้าไม่มีการทิ้งรัง ไม่มีเพราะเหตุใด)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >11. สาเหตุของการทิ้งรังของผึ้งและ/หรือชันโรง ในฟาร์มของท่านคือ (ตอบได้มากกว่า 1 ข้อ)</p>
                    <input
                      type="checkbox"
                      name="where_c"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ซื้อพันธุ์ผึ้งมาเลี้ยง
                    <input
                      type="checkbox"
                      name="where_c"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > มีโรคและศัตรูเข้ามาทำลายรัง
                    <input
                      type="checkbox"
                      name="where_c"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ทิ้งรังตามฤดูกาล
                    <input
                      type="checkbox"
                      name="where_C"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > อื่นๆ
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >12. ท่านแก้ไขปัญหาการทิ้งรังของผึ้งและ/หรือชันโรง หรือไม่ (แก้ไข โดย.../ไม่มีการแก้ไข โดย...)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >13. ปัญหาการทิ้งรังของผึ้งและ/หรือชันโรง มีผลต่อต้นทุน-รายได้หรือไม่ (มี เนื่องจาก.../ ไม่มี เนื่องจาก...)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >14. ท่านมีการจัดการรังจากการทิ้งรังของผึ้งและ/หรือชันโรง หรือไม่ (เลือกได้มากกว่า 1 ข้อ)</p>
                    <input
                      type="checkbox"
                      name="where_c"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > มี โดยขายรังเปล่า
                    <input
                      type="checkbox"
                      name="where_c"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > มี โดยนำมาแยกไขผึ้งแล้วขายต่อ
                    <input
                      type="checkbox"
                      name="where_c"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > มี นำไปใช้หมุนเวียนในฟาร์ม
                    <input
                      type="checkbox"
                      name="where_C"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > อื่นๆ
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >15. ต้นทุนการเลี้ยงผึ้งและ/หรือชันโรง กี่บาทต่อรัง (เช่น ค่ากล่องเลี้ยงผึ้ง ไม้ ตะปู หมวกกันผึ้ง คอนผึ้ง เเรงงาน น้ำตาล ฯลฯ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >16. ราคาขายผลผลิตของผึ้งและ/หรือชันโรง แต่ละชนิดได้ปริมาณกี่ กก./รังๆละกี่บาท (เช่น น้ำผึ้ง ไขผึ้ง เกสรผึ้ง พันธุ์ผึ้ง ฯลฯ )</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >17. วิธีการเก็บผลผลิตน้ำผึ้ง ใช้วิธีการใด</p>
                    <input
                      type="checkbox"
                      name="where_c"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > เครื่องสลัดน้ำผึ้ง
                    <input
                      type="checkbox"
                      name="where_c"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > กรีดจากรัง
                    <input
                      type="checkbox"
                      name="where_c"
                      value="yes"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > ใช้ผ้าขาวบางและบีบคั้นทั้งรัง
                    <input
                      type="checkbox"
                      name="where_C"
                      value="no"
                      style="border-radius: 5px; border: 1px solid #bebfc1;margin: 0px 30px 0px 20px;"
                    > อื่นๆ
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >18. ผึ้งและ/หรือชันโรง ช่วยเพิ่มผลผลิตให้ท่านหรือไม่ (ชนิดของพืช/ผลผลิตที่ได้ต่อ กก.ต่อปี พ.ศ)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >19. ท่านมีเทคนิคหรือวิธีการเพิ่มผลผลิตน้ำผึ้งหรือไม่ (มี อย่างไร... /ไม่มี เนื่องจาก...)</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >20. ท่านสามารถเก็บผลผลิตน้ำผึ้ง/ชันโรงได้ปีละกี่ครั้ง ช่วงไหนบ้าง</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >21. ท่านสนใจให้สวนหรือฟาร์มของท่านเป็นจุดเรียนรู้หรือไม่ เพราะเหตุใด</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >22. ท่านมีความสนใจเรียนรู้เพิ่มเติมหรือเข้าคอร์สอบรมเกี่ยวกับการทำผลิตภัณฑ์สบู่ แชมพู แปรรูปผลผลิต ฯลฯ หรืออบรมนักการตลาดท้องถิ่น หรือไม่ เพราะเหตุใด</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >23. ท่านมีความสนใจจะทดลองใช้รังผึ้งอัจฉริยะ (Smart hive) หรือไม่ เพราะเหตุใด</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="mg col-lg-12">
                    <p
                      style=" margin-top: 0px !important; margin-bottom:0px;"
                    >ข้อเสนอแนะ/อื่นๆ</p>
                    <input
                      type="text"
                      style="border-radius: 5px; border: 1px solid #bebfc1; width:100%;"
                    >
                  </div>
                </div>






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

