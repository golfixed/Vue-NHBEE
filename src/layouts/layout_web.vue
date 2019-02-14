<template>
  <div>
    <div class="navheight">
      <navbar/>
    </div>
    <div>
      <slot/>
    </div>
    <footerall/>
  </div>
</template>

<script>
import footerall from "@/components/footer.vue";
import navbar from "@/components/navbar.vue";
import { mdbIcon } from "mdbvue";
export default {
  name: "defaultlayout",
  components: {
    mdbIcon,
    navbar,
    footerall
  },
  data() {
    return {
      hamburger: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    toggle() {
      this.hamburger = !this.hamburger;
    },
    switchLocal() {
      if (this.$i18n.locale === "th") this.$i18n.locale = "en";
      else this.$i18n.locale = "th";
    }
  },
  computed: {
    displayLocal() {
      if (this.$i18n.locale === "th") return "EN";
      else return "TH";
    },
    searchbar: function() {
      return this.$t("message.searchbar");
    }
  }
};
</script>

<style>
.body-padding {
  padding: 30px;
}
/* Samsung */
@media (max-width: 320px) {
  .page-title-yellbold {
    font-size: 30px !important;
  }
  .page-subtitle {
    font-size: 27px !important;
  }
  .page-title {
    height: 150px !important;
  }
}

/* iPhone Plus */
@media (max-width: 425px) {
  .navheight {
    height: 60px !important;
  }
  .webname-txt {
    font-family: "Kanit", sans-serif;
    font-size: 20px !important;
  }
  .logo {
    height: 38px !important;
  }
  .page-title-padding-fix {
    padding: 0px 0px 0px 10px;
  }
  .home-header-bg {
    height: 50vh !important;
  }
  .page-title {
    height: 35vh !important;
  }
  #navbar-nav a {
    font-size: 20px !important;
    height: 38px !important;
    line-height: 45px !important;
  }
}
/* iPad */
@media (min-width: 768px) {
  .navheight {
    height: 80px !important;
  }
}
/* Desktop and more */
@media (min-width: 769px) {
  .navheight {
    height: 120px !important;
  }
}
.lanbtn {
  border: solid;
  color: #6ba329;
  border-width: 1px;
  border-color: #6ba329;
  border-radius: 4px;
  background-color: white;
  height: 38px;
  width: auto;
  padding-left: 11px;
  padding-right: 11px;
}
.hamburger {
  border: solid;
  color: #707070;
  border-width: 1px;
  border-color: #707070;
  border-radius: 4px;
  background-color: white;
  height: 38px;
  width: 42px;
  -webkit-box-shadow: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}
@media screen and (max-width: 768px) {
  .nav-display.show {
    display: block;
  }

  #navbar-nav li {
    display: block;
    width: 100%;
  }
}
.footer-logo {
  margin: 0px 20px 0px 0px;
  width: 70px;
  height: 70px;
}

.topsearch {
  border: solid;
  color: #6ba329;
  border-width: 1px;
  border-color: #6ba329;
  border-radius: 4px;
  background-color: white;
  height: 38px;
  width: 42px;
}

.header-bg {
  background-color: white;
}

.header-div {
  width: 100%;
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
  background-color: #fcfcfc;
  z-index: 999;
  position: fixed;
  -webkit-box-shadow: 0px 2px 10px -1px #999;
  -moz-box-shadow: 0px 2px 10px -1px #999;
  box-shadow: 0px 2px 10px -1px #999;
}

.header-top-line {
  background-color: #e3b800;
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
  font-family: "Kanit", sans-serif;
  font-size: 24px;
  color: #5d5d5d;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  font-weight: bold;
  margin-left: 20px;
}
.header-div-padding {
  padding: 13px 0px 13px 0px;
}

button.navbar-toggler {
  height: 38px !important;
  border-color: rgb(160, 160, 160) !important;
}
@media (max-width: 425px) {
  .header-div-padding {
    padding: 0px 0px 0px 0px;
  }
}

@media (max-width: 768px) {
  .golfsearch {
    display: none !important;
  }
  .nav-display {
    display: none;
  }
  .nav-mb-display {
    display: inherit !important;
  }
}

@media (min-width: 769px) {
  .nav-mb-display {
    display: none !important;
  }
}

.main-body {
  background-color: #f7f7f7;
  width: 100%;
  padding: 0px 0px 0px 0px !important;
  margin: 0px 0px 0px 0px !important;
}

.navbar-div {
  background-color: #efefef;
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
  color: #5d5d5d;
  height: 38px;
  line-height: 31px;
  transition-duration: 0.3s;
}

#navbar-nav a:hover {
  font-weight: bold;
  background-color: #e3b800;
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
@media (max-width: 768px) {
  .main-div-padding-fix {
    padding: 90px 0px 0px 0px !important;
  }
}
@media (max-width: 425px) {
  .main-div-padding-fix {
    padding: 70px 0px 0px 0px !important;
  }
}

@media (min-width: 769px) {
  .main-div-padding-fix {
    padding: 123px 0px 0px 0px !important;
  }
}

.page-title {
  margin-top: 30px !important;
  height: 200px;
  width: 100%;
}

.page-title-padding-fix {
  padding: 0px 0px 0px 15px;
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
  color: #e3b800;
  font-weight: 400;
  z-index: 3;
}

.page-subtitle {
  font-size: 32px;
  color: #5d5d5d;
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
  color: #5d5d5d;
  font-size: 19px;
  height: 50px;
  width: 200px !important;
  background-color: transparent;
  border: 2px solid #5d5d5d;
  border-radius: 1000px;
  transition-duration: 0.3s;
  margin: 10px 0px 10px 0px;
}

.survey-btn:hover {
  color: white;
  background-color: #5d5d5d;
  border: 2px solid #5d5d5d;
  border-radius: 1000px;
  margin: 10px 0px 10px 0px;
}

.survey-title {
  font-size: 40px;
  color: #e3b800;
  font-weight: 100;
  z-index: 3;
  margin: 10px 0px 10px 0px;
  text-align: center;
}

.survey-subtitle {
  font-size: 32px;
  color: #5d5d5d;
  font-weight: 100;
  z-index: 3;
  margin: 10px 0px 10px 0px;
  text-align: center;
}

@media screen and (max-width: 425px) {
  .survey-subtitle {
    font-size: 25px;
    text-align: center;
  }

  .survey-title {
    font-size: 35px;
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
    border-color: #cccaca;
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
    border-color: #cccaca;
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
  border-color: #cccaca;
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
  color: #5d5d5d !important;
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
  background-color: #29a645 !important;
  color: white !important;
}

body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}
form.example input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid #cbcbcb;
  border-radius: 4px 0px 0px 4px;
  float: left;
  width: 80%;
  background: white;
}

form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196f3;
  color: white;
  font-size: 17px;
  border: 1px solid #2196f3;
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

