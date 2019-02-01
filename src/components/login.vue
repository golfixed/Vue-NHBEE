<template>
  <div>
    <div class="header-bg"/>
    <div class="container" style="margin-top: -280px;">
      <div class="container page-title d-flex align-items-center">
        <div class="row flex-column page-title-padding-fix">
          <h3 class="page-title-yellbold">{{ $t("message.pageheader.admin.title") }}</h3>
          <h3 class="page-subtitle">{{ $t("message.pageheader.admin.subtitle") }}</h3>
        </div>
      </div>
      <div class="page-body" style="overflow: hidden;">
          <div class="container">
            <div class="row" style="padding-top: 40px;">
              <div class="col-12">
                <h3 style="text-align: center;">{{ $t("message.page6_contact.title") }}</h3>
              </div>
            </div>

            <div class="row" style="padding: 20px 20px 35px 20px;">
              <div class="col-md-6">
                <div><p class="topic">{{ $t("message.page6_contact.address.title") }}</p></div>
                <div>
                  <div class="d-flex flex-row p-2 align-items-center">
                  <mdb-icon icon="building" style="margin-right: 10px;"/>
                  <p style="margin-bottom: 0px; font-weight: bold;">{{ $t("message.page6_contact.address.detail.line1") }}</p>
                  </div>
                  <div class="d-flex flex-row p-2 align-items-center">
                    <div>
                      <mdb-icon icon="map-marker-alt" style="margin-right: 10px;"/>
                    </div>
                    <div>
                      <p style="margin-bottom: 0px;">{{ $t("message.page6_contact.address.detail.line2") }}</p>
                      <p style="margin-bottom: 0px;">{{ $t("message.page6_contact.address.detail.line3") }}</p>
                    </div>
                  </div>
                </div>
                <div><p class="topic">{{ $t("message.page6_contact.contact.title") }}</p></div>
                <div d-flex>
                  <div class="d-flex flex-row p-2 align-items-center">
                  <mdb-icon icon="phone" style="margin-right: 10px;"/><p style="margin-bottom: 0px;">{{ $t("message.page6_contact.contact.detail.line1") }}</p>
                  </div>
                  <div class="d-flex flex-row p-2 align-items-center">
                  <mdb-icon icon="envelope-open" style="margin-right: 10px;" /><p style="margin-bottom: 0px;">{{ $t("message.page6_contact.contact.detail.line2") }}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-center justify-content-center">
                <div class="mapdiv">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1939.0583564645842!2d99.5063870585839!3d13.589680794078491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e3470848eda061%3A0xeb298b44171d0ed3!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LiY4LiZ4Lia4Li44Lij4Li1ICjguKPguLLguIrguJrguLjguKPguLUp!5e0!3m2!1sth!2sth!4v1548934623823" width="600" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default { 
    name: 'login'
}
</script>

<style>
.topic{
  margin: 30px 0px 10px 0px;
  padding-left: 10px;
  color:#E3B800;
  font-weight: bold;
  font-size: 20px;
  border-color: #E3B800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.header-bg {
  height: 280px;
  background-image: url("/static/img/contact/bg.jpg");
  background-position: center center;
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
</style>
