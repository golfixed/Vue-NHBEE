<template>
<mdb-card style="width: 250px; height: 350px;">
    <mdb-card-image :src=" image" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>{{title}}</mdb-card-title>
      <mdb-card-text>{{description}}</mdb-card-text>
      <mdb-btn :href=" link " color="primary" class="readmore-btn">{{ $t("message.btn.readmore") }}</mdb-btn>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue'
export default {
  name: 'newsblock',
  props: ['image', 'title', 'description', 'link'],
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  }
}
</script>

<style scoped>
.hover:hover{
  transition-duration: 0.1s;
  transform: scale(1.1);
}
.card {
  padding: 0;
  width: 100%;
  background-color: white;
  width: 120px;
  height: 220px;
  border-radius: 5px !important;
  border: 0;
  -webkit-box-shadow: 0px 2px 5px -1px #999;
  -moz-box-shadow: 0px 2px 5px -1px #999;
  box-shadow: 0px 2px 5px -1px #999;
  overflow: hidden;
}

.card:hover {
  padding: 0;
  width: 100%;
  background-color: white;
  width: 120px;
  height: 220px;
  border-radius: 5px !important;
  -webkit-box-shadow: 0px 2px 5px -1px #999;
  -moz-box-shadow: 0px 2px 5px -1px #999;
  box-shadow: 0px 2px 5px -1px #999;
  overflow: hidden;
  border: 0;
}
.readmore-btn{
    background-color: #E3B800 !important;
    border-color: #E3B800;
    box-shadow: none !important;
    margin-left: 0px;
    margin-right: 0px;
    border-bottom-width: 1px;
    margin-bottom: 0px;
    margin-top: 24px;
}
</style>
