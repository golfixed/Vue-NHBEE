<template>
    <div class="row" style="padding: 40px;">
        <div class="col-12">
            <div class="article2-title">{{title}}</div>
            <div class="row d-flex justify-content-center news-img">
                <img :src="image" style="border-radius:5px; height:250px; margin: 0px 10px; " />
            </div>
        </div>
        <div class="col-12">
            <div class="ar-des" style="text-indent: 50px;">{{description}}</div>
        </div>
        <div class="col-12">
            <div class="ar-date">Published on: {{date}}</div>
        </div>
        <div class="col-12 backpanel d-flex align-items-center">
            <router-link to="/news" class="backbtn">
                <mdb-icon icon="arrow-left" style="margin-right: 10px;"/>Back
            </router-link>
        </div>
    </div>
</template>

<script>
import {mdbIcon} from 'mdbvue'
export default {
    name: 'article',
    props: ['title', 'description', 'image', 'date'],
    components: {
        mdbIcon
    }
}
</script>

<style scoped>
.backbtn{
    color: black;
}
.backbtn:hover{
    color: rgb(54, 199, 25);
}
.news-img{
    background-color: #e8e8e8;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 0px;
    margin-left: 0px;
    overflow:hidden; 
    border-radius:5px;
}
.backpanel{
    margin-top: 20px;
}
.article2-title {
    margin: 10px 0px 30px 0px;
    color: #e3b800;
    font-weight: bold;
    font-size: 23px;
    border-color: #e3b800;
    border: solid;
    border-width: 0px 0px 1px 0px;
    padding-bottom: 10px;
}
.ar-des {
    margin-top: 20px;
    padding-bottom: 20px;
}
.ar-date {
    font-size: 15px;
    border: solid;
    border-color: #dee2e6;
    border-width: 0px 0px 1px 0px;
    color: rgb(126, 126, 126);
    margin-top: 20px;
    padding-bottom: 20px;
}
</style>
