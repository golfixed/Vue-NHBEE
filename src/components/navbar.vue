<template>
  <div class="header-div" style="position: fixed; z-index: 999;">
      <div class="header-top-line"></div>

      <div class="container header-cont">
        <div class="row header-webtitle-div d-flex align-items-center">
          <div class="col-6 d-flex flex-row align-items-center header-div-padding">
            <img class="logo" src="/static/img/logo.png">
            <div class="webname">
              <h1 class="webname-txt">NHBEE KMUTT</h1>
            </div>
          </div>
          <div class="col-6 d-flex flex-row align-items-center header-div-padding">
            <form class="form-inline my-2 my-lg-0 ml-auto p-2">
              <input
                class="form-control mr-sm-2 searchbox golfsearch"
                type="search"
                :placeholder="searchbar"
                aria-label="Search"
              >
              <button class="topsearch" type="submit" style="margin-right: 8px; padding-left: 11px; padding-right: 11px;">
                <mdb-icon icon="search" />
              </button>
              <button class="lanbtn d-flex flex-rol align-items-center" @click="switchLocal()"><mdb-icon icon="globe" style=" font-size: 20px;margin-right: 5px;"/>{{ displayLocal }}</button>
            </form>
            <nav class="nav-mb-display">
              <div>
                <button class="btn hamburger" v-on:click="toggle()" type="button">
                  <mdb-icon icon="bars" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="row navbar-div d-flex justify-content-center">
        <div class="container d-flex align-items-center justify-content-center">
          <nav :class="[{'show': hamburger}, 'nav-display']">
            <ul id="navbar-nav">
              <li class="active">
                <router-link to="/">{{ $t("message.navbar.col1") }}</router-link>
              </li>
              <li>
                <router-link to="/about">{{ $t("message.navbar.col2") }}</router-link>
              </li>
              <li>
                <router-link to="/news">{{ $t("message.navbar.col3") }}</router-link>
              </li>
              <li>
                <router-link to="/survey">{{ $t("message.navbar.col4") }}</router-link>
              </li>
              <li>
                <router-link to="/research">{{ $t("message.navbar.col5") }}</router-link>
              </li>
              <li>
                <router-link to="/contact">{{ $t("message.navbar.col6") }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbContainer,
  mdbRow,
  mdbInput,
  mdbNavbarBrand,
  mdbIcon
} from 'mdbvue'
import CountryFlag from 'vue-country-flag'

export default {
  name: 'navbar',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbContainer,
    mdbRow,
    mdbInput,
    mdbNavbarBrand,
    mdbIcon,
    CountryFlag
  },
  data () {
    return {
      hamburger: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toggle () {
      this.hamburger = !this.hamburger
    },
    switchLocal () {
      if (this.$i18n.locale === 'th') this.$i18n.locale = 'en'
      else this.$i18n.locale = 'th'
    }
  },
  computed: {
    displayLocal () {
      if (this.$i18n.locale === 'th') return 'EN'
      else return 'TH'
    },
    searchbar: function () {
      return this.$t('message.searchbar')
    }
  }
}
</script>

<style scoped>
.lanbtn{
    border: solid;
    color: #6BA329;
    border-width: 1px;
    border-color: #6BA329;
    border-radius: 4px;
    background-color: white;
    height: 38px;
    width: auto;
    padding-left: 11px;
    padding-right: 11px;
}
.hamburger{
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
</style>
