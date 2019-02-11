<template>
  <div class="row block">
    <div class="row">
      <div class="col-md-3">
        <img
          :src="img"
          style="width: 100%; overflow: hidden; border-radius: 5px;    margin: 10px 0px;"
        />
      </div>
      <div class="col-md-9">
        <div class="news-title">{{title}}</div>
        <div class="des">{{description}}</div>
        <router-link :to="link"><p class="readmore-btn d-flex justify-content-end">Read More</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsrow',
  props: ['title', 'description', 'img','link'],
  components: {
  }
}
</script>

<style scoped>
.readmore-btn{
  font-size: 15px;
  margin: 0px;
  color: #6c757d;
}
.readmore-btn:hover{
  font-size: 15px;
  margin: 0px;
  color: black;
}
.golfbtn {
  background-color: #0ca514;
  color: #fff !important;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    padding: 0.84rem 2.14rem;
    font-size: 1rem;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    margin: 0.375rem;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
}
.news-title {
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  color: #e3b800;
  font-weight: bold;
  font-size: 20px;
  border-color: #e3b800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.des {
  margin-top: 10px;
  margin-bottom: 10px;
}
.block{
  padding: 30px;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #f8f9fa;
  background-color: white;
}
.block:hover{
  transition-duration: 0.2s;
  background-color: rgb(250, 250, 250);
}
</style>
