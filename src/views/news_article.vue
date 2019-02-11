<template>
    <div class="container">

      <div class="page-body" style="overflow: hidden;">
        <div class="container">
          <div class="row">
                <article1
                    title="Honeybees have a noontime break from their dancing activity"
                    description="This finding showed that Apis florea bees largely avoid flying off between 12:00 h and 13:00 h on the one hand, and that their preferred departure angle of the sun is between 55๐ and 65๐ on the other. Given the difficulties of taking an accurate reading of the sun..."
                    image="/static/img/news/n/n1.png"
                />
          </div>
          <div>
              <router-link to="/news">Back</router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import layout_default from '@/layouts/layout_web.vue'
import article1 from '@/components/news/article.vue'
export default {
  name: 'research',
  components: {
    article1,
  },
  created() {
    this.$emit(`update:layout`, layout_default);
  }
};
</script>
<style scpoed>
.top-fix {
  margin-top: 123px;
}
.pagination.pg-blue .page-item.active .page-link {
  background-color: #e1b534;
  border-radius: 50%;
  margin: 5px;
}
.lime.lighten-2 {
  background-color: #f5f5f5 !important;
  border-radius: 100px;
}
.input-group.md-form.form-sm.form-2 input.lime-border {
  border: 1px solid #e6e6e6;
  border-radius: 100px 0px 0px 100px;
  background-color: whitesmoke;
}
.list-group .list-group-item:first-child {
  border-top-left-radius: 15px !important;
  border-top-right-radius: 15px !important;
}
.list-group .list-group-item:last-child {
  border-bottom-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
}
.about-pic {
  margin: 0px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
}
.topic {
  margin: 10px 0px 10px 0px;
  padding-left: 10px;
  color: #e3b800;
  font-weight: bold;
  font-size: 20px;
  border-color: #e3b800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.news-header-bg {
  height: 280px;
  background-image: url("/static/img/news/bg.jpg");
  background-position: center top;
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
  margin: 30px 10px 30px 10px;
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
.open {
  font-size: 12px;
  color: white;
  background-color: #5d8b27 !important;
  border-color: #5d8b27;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  margin-left: 0px;
  margin-right: 0px;
  border-bottom-width: 1px;
  border-radius: 1000px;
}
</style>
