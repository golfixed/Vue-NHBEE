<template>
  <div class="main-body" id="app" style="font-family: 'Chakra Petch', sans-serif;">
    <navbar />
    <div class="main-div main-div-padding-fix">
      <router-view/>
    </div>
    <div class="footer-div">
      <div> <!-- old footer here -->
        <div class="container-fluid footer-bg">
          <div class="container">
            <div class="container">
              <div class="row">
                <div class="col-md-7 address-fix d-flex align-items-center row" style=" padding-right: 0px; padding-left: 0px;">
                  <div class="col-md-4 d-flex flex-row justify-content-center" style=" padding: 20px 0px 40px 0px;">
                    <img class="footer-logo" src="/static/img/logo.png" />
                    <img class="footer-logo" src="/static/img/logo-kmutt.png" />
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <h5 style="font-weight: bold;">NHBEE KMUTT</h5>
                    <h6 style="font-weight: bold;">Native Honeybee Research Laboratory</h6>
                    <h6>{{ $t("message.footer.address.name") }}</h6>
                    <h6>{{ $t("message.footer.address.add") }}</h6>
                  </div>
                </div>
                <div class="col-md-5 left-hr quicklink-fix">
                  <div class="row">
                    <div class="col-4 more-left-space">
                      <h6>{{ $t("message.footer.link.col1.colname") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item1") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item2") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item3") }}</h6>
                      <h6 class="sitemap-link">{{ $t("message.footer.link.col1.item4") }}</h6>
                    </div>
                    <div class="col-8" style>
                      <div class="row">
                        <div class="col-6">
                          <h6>{{ $t("message.footer.link.col2.colname") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item1") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item2") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item3") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col2.item4") }}</h6>
                        </div>
                        <div class="col-6">
                          <h6>{{ $t("message.footer.link.col3.colname") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item1") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item2") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item3") }}</h6>
                          <h6 class="sitemap-link">{{ $t("message.footer.link.col3.item4") }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row top-hr" style="padding: 20px 0px 20px 0px;">
                <div class="col-md-6 d-flex justify-content-center">
                  <font-awesome-icon
                    icon="envelope"
                    style="color: #707070; margin: 10px 0px 10px 0px !important;"
                  />
                  <h6
                    style=" text-align: center; color: #5D5D5D !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                  >{{ $t("message.footer.contact.email") }}</h6>
                </div>
                <div class="col-md-6 d-flex justify-content-center">
                  <font-awesome-icon
                    icon="phone"
                    style="color: #707070; margin: 10px 0px 10px 0px !important;"
                  />
                  <h6
                    style="text-align: center; color: #5D5D5D !important; font-size: 14px !important; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                  >{{ $t("message.footer.contact.phone") }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid right-bg">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-6">
                <p
                  style="color: white; font-size: 12px; padding: 10px 0px 10px 0px !important; margin: 0px 0px 0px 0px !important;"
                >Copyright © Honeybee Laboratory at KMUTT. All rights reserved.</p>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <font-awesome-icon
                  icon="globe"
                  style="color: white; margin: 10px 0px 10px 0px !important;"
                />
                <p
                  style="color: white !important; font-size: 12px; padding: 10px 0px 10px 10px !important; margin: 0px 0px 0px 0px !important;"
                >
                  <a href class="lng-btn">2019 NNHBEE KMUTT</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
    <div class="header-top-line"></div>
  </div>
</template>

<script>

import Navbar from '@/components/navbar.vue'
import footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit|Sarabun|Chakra+Petch');
@import 'assets/bootstrap/css/bootstrap.css';
.footer-logo{
  margin: 0px 20px 0px 0px;
  width: 70px;
  height: 70px;
}
.topsearch{
  border: solid;
  color: #6BA329;
  border-width: 1px;
  border-color: #6BA329;
  border-radius: 4px;
  background-color: white;
  height: 38px;
  width: 42px;
}
.dark-blue-text {
  color: #0a38f5;
}
.dark-pink-text {
  color: #ac003a;
}
.dark-amber-text {
  color: #ff6f00;
}
.dark-teal-text {
  color: #004d40;
}
.header-bg {
  background-color: white;
}

.header-div {
  width: 100%;
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
  background-color: #FCFCFC;
  z-index: 999;
  position: fixed;
  -webkit-box-shadow: 0px 2px 10px -1px #999;
  -moz-box-shadow: 0px 2px 10px -1px #999;
  box-shadow: 0px 2px 10px -1px #999;

}

.header-top-line {
  background-color: #E3B800;
  width: 100%;
  height: 5px;
}

.header-webtitle-div {
  width: 100%;

  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}

.logo {
  height: 50px;
}

.webname-txt {
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  color: #5D5D5D;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  font-weight: bold;
  margin-left: 20px;
}
.header-div-padding{
    padding: 13px 0px 13px 0px;
}

button.navbar-toggler {
    height: 38px !important;
    border-color: rgb(160, 160, 160) !important;
}
@media (max-width: 425px){

    .header-div-padding{
        padding: 0px 0px 0px 0px;
    }
}

@media (max-width: 768px){
    .golfsearch{
        display: none !important;
    }
    .nav-display{
        display: none;
    }
    .nav-mb-display{
        display: inherit !important;
    }
}

@media (min-width: 769px){
    .nav-mb-display{
        display: none !important;
    }
}

.main-body {
  background-color: #F7F7F7;
  width: 100%;
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}

.navbar-div {
  background-color: #EFEFEF;
  width: 100% !important;
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
}

.header-cont {
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
}

ol,
ul {
  list-style: none !important;
}

#navbar-nav {
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;

}

#navbar-nav li {
  display: block;
  width: 120px;
  float: left;
  margin-left: 2px;
  height: 38px;
}

#navbar-nav a {
  font-size: 15px;
  text-align: center;
  display: block;
  padding: 3px;
  text-decoration: none;
  color: #5D5D5D;
  height: 38px;
  line-height: 31px;
  transition-duration: 0.3s;
}

#navbar-nav a:hover {
  font-weight: bold;
  background-color: #E3B800;
  color: white;
  height: 38px;
}

.home-header-bg {
  height: 280px;
  background-image: url("/static/img/home.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}


.main-div {
  z-index: -1;
  width: 100%;
  margin: 0px 0px 0px 0px !important;
}
@media (max-width: 768px){
  .main-div-padding-fix{
    padding: 90px 0px 0px 0px !important;
  }
}
@media (max-width: 425px){
  .main-div-padding-fix{
    padding: 70px 0px 0px 0px !important;
  }
}

@media (min-width: 769px){
    .main-div-padding-fix{
    padding: 100px 0px 0px 0px !important;
  }
}

.page-title {
  margin-top: 30px !important;
  height: 200px;
  width: 100%;

}

.page-title-padding-fix {
  padding: 0px 0px 0px 15px !important;
}

.slide-div {
  background-color: white;
  height: auto;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  -webkit-box-shadow: 0px 2px 5px -1px #999;
  -moz-box-shadow: 0px 2px 5px -1px #999;
  box-shadow: 0px 2px 5px -1px #999;
}

.page-title-yellbold {
  font-size: 40px;
  color: #E3B800;
  font-weight: 400;
  z-index: 3;
}

.page-subtitle {
  font-size: 32px;
  color: #5D5D5D;
  font-weight: 100;
  z-index: 3;
}

.page-bgtext {
  position: relative;
  top: -100x;
  font-size: 150px;
  z-index: 1;
  font-weight: 100;
  opacity: 5%;
}

.quicklink-div {
  margin: 0px 0px 0px 0px !important;
  padding: 10px 10px 10px 10px !important;

}

.ql-div {
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}
.card-inner-txt-row {
  align-items: center;
  width: 100%;
  padding: 10px 10px 10px 10px !important;

}
.survey-home-bg {
  z-index: -1;
  width: 100%;
  background-image: url("/static/img/home-survey-bg.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.survey-div {
  margin-top: 40px;
  margin-bottom: 30px;
}

.survey-btn {
  color: #5D5D5D;
  font-size: 19px;
  height: 50px;
  width: 200px !important;
  background-color: transparent;
  border: 2px solid #5D5D5D;
  border-radius: 1000px;
  transition-duration: 0.3s;
  margin: 10px 0px 10px 0px;
}

.survey-btn:hover {
  color: white;
  background-color: #5D5D5D;
  border: 2px solid #5D5D5D;
  border-radius: 1000px;
  margin: 10px 0px 10px 0px;
}

.survey-title {
  font-size: 40px;
  color: #E3B800;
  font-weight: 100;
  z-index: 3;
  margin: 10px 0px 10px 0px;
  text-align: center;
}

.survey-subtitle {
  font-size: 32px;
  color: #5D5D5D;
  font-weight: 100;
  z-index: 3;
  margin: 10px 0px 10px 0px;
  text-align: center;
}

@media (max-width: 425px) {
  .survey-subtitle {
    font-size: 18px;
    text-align: center;
  }

  .survey-title {
    font-size: 28px;
    text-align: center;
  }
}

.connect-btn {
  width: 40px;
  transition-duration: 0.1s;
}

.connect-btn:hover {
  transform: scale(1.15);
}

/* p {
  margin: 0px 0px 0px 0px !important;
} */

.footer-bg {
  background-color: #e3e1e1;
}

.footer-div {
  position: relative;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}

.right-bg {
  background-color: #5d5d5d;
}

@media (min-width: 768px) {
  .left-hr {
    border: solid;
    border-width: 0px 0px 0px 1px;
    border-color: #CCCACA;
  }

  .quicklink-fix {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .address-fix {
    margin: 30px 0px 30px 0px;
    padding: 0px 0px 0px 0px !important;
  }

  .more-left-space {
    padding-left: 30px !important;
  }
}

@media (max-width: 425px) {
  .left-hr {
    border: solid;
    border-width: 1px 0px 0px 0px;
    border-color: #CCCACA;
  }

  .quicklink-fix {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .address-fix {
    margin: 30px 0px 30px 0px;
  }
}

.top-hr {
  border: solid;
  border-width: 1px 0px 0px 0px;
  border-color: #CCCACA;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
  text-decoration: none;
}

.mailphone-txt {
  text-align: center;
  color: #5D5D5D !important;
  font-size: 14px !important;
  padding: 0px 0px 0px 10px !important;
  margin: 0px 0px 0px 0px !important;
}

.lng-btn {
  text-decoration: none;
  color: white !important;
}

.sitemap-link {
  margin: 10px 0px 10px 0px;
  color: #707070;
}

.emailbtn {
  width: 100%;
  background-color: #29A645 !important;
  color: white !important;
}

body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid #CBCBCB;
  border-radius: 4px 0px 0px 4px;
  float: left;
  width: 80%;
  background: white;
}

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid #2196F3;
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>
