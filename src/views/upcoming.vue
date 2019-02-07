<template>
  <div class="future-header-bg d-flex align-items-center">
    <div class="container d-flex justify-content-center align-items-center">

      <div class="page-body" style="overflow: hidden; padding: 25px 10px 25px 10px;">

          <div class="container">
            
            <form>
              <div class="flex-column d-flex justify-content-center align-items-center">
              <img src="/static/img/logo.png" style="width: 80px; margin: 0px 0px 20px 0px;"/>
              </div>

              <label for="defaultFormLoginPasswordEx" class="grey-text">Future Access Key</label>
              <input v-model="password" placeholder="Enter" type="password" class="form-control"/>
              <div class="text-center mt-4">
                    <button @click="login" class="btn-enter" ><mdb-icon icon="sign-in-alt" style="margin-right: 10px;" />Login</button>
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
  },
  data() {
    return {
      password: '',
      wrongpw: 'WRONG PASSWORD'
    }
  },
  methods: {
    login () {
      if (this.password == 'nhbee2019')
        this.$router.push("/home")
      else
        return wrongpw
    }
  }
}
</script>

<style>
.btn-enter {
  background-color: #0ca514;
  color: #fff !important;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    padding: 0.84rem 2.14rem;
    font-size: 0.81rem;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    margin: 0.375rem;
    border: 0;
    border-radius: 10000px;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
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
.future-header-bg {
  padding: 0px;
  background-image: url("/static/img/upcome/bg.jpg");
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
