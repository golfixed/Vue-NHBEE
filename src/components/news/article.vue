<template>
    <div class="row" style="padding: 40px;">
        <div class="col-12">
            <div class="article2-title">{{title}}</div>
            <div class="row d-flex justify-content-center" style="overflow:hidden; border-radius:5px;">
                <img :src="image" style="border-radius:5px; height:250px; margin: 0px 10px; " />
            </div>
        </div>
        <div class="col-12">
            <div class="ar-des">{{description}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'article',
    props: ['title', 'description', 'image']
}
</script>

<style scoped>
.article2-title {
  margin: 0px 0px 20px 0px;
  padding-left: 10px;
  color: #e3b800;
  font-weight: bold;
  font-size: 23px;
  border-color: #e3b800;
  border: solid;
  border-width: 0px 0px 0px 3px;
}
.ar-des {
    border: solid;
    border-color: #dee2e6;
    border-width: 0px 0px 1px 0px;
  margin-top: 20px;
  padding-bottom: 20px;
}
</style>
