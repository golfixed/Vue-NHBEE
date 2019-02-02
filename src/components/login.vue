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
                <h3 style="text-align: center;">{{ $t("message.pageheader.admin.title") }}</h3>
              </div>
            </div>
            <div class="row" style="padding-top: 40px;">
              <div class="col-12">
                <h3 style="text-align: center;">{{ $t("message.pageheader.admin.title") }}</h3>
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
