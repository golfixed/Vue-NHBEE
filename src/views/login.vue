<template>
  <div class="login-header-bg d-flex align-items-center">
    <div class="container d-flex justify-content-center align-items-center">

      <div class="page-body" style="overflow: hidden; padding: 20px;">

          <div class="container">
            
            <form>
              <div class="flex-column d-flex justify-content-center align-items-center">
              <img src="/static/img/logo.png" style="width: 80px; margin: 0px 0px 20px 0px;"/>
              <p class="h4 text-center mb-4">Log in to Admin Mode</p>
              </div>

              <label for="defaultFormLoginEmailEx" class="grey-text">Username</label>
              <input type="username" id="defaultFormLoginEmailEx" class="form-control"/>
              <br/>
              <label for="defaultFormLoginPasswordEx" class="grey-text">Password</label>
              <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
              <div class="text-center mt-4">
                <router-link to="/home"><button class="btn btn-back" type="submit"><mdb-icon icon="angle-left" style="margin-right: 10px;" />Back</button></router-link>
                <button class="btn btn-indigo" type="submit"><mdb-icon icon="sign-in-alt" style="margin-right: 10px;" />Login</button>
              </div>
            </form>
          </div>
      </div>

    </div>

</div>
</template>

<script>
import layout_login from '@/layouts/layout_login.vue'
import {
  mdbIcon
} from 'mdbvue'
export default { 
    name: 'login',
    created() {
    this.$emit(`update:layout`, layout_login);
  },
  components: {
    mdbIcon
  }
}
</script>

<style>
.btn-back{
  background-color: #333b41;
  color: #fff !important;
}
.btn-indigo {
  background-color: #0ca514 !important;
  color: #fff !important;
}
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
.login-header-bg {
  padding: 0px;
  background-image: url("/static/img/login/bg.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
  margin: 30px 10px 30px 10px;
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
