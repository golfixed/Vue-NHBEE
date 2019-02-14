<template>
  <mdb-list-group>
    <mdb-list-group-item :action="true" href="#">งานวิจัยเกี่ยวกับระบบสืบพันธ์ของผึ้ง 
    </mdb-list-group-item>
    <mdb-list-group-item :action="true" href="#">วิจัยอาณาจักรของผึ้ง 
    </mdb-list-group-item>
    <mdb-list-group-item :action="true" href="#">การทำงานของระบบประสาทของผึ้ง
    </mdb-list-group-item>
    <mdb-list-group-item :action="true" href="#">งานวิจัยเกี่ยวกับความเหมือนหรือแตกต่างของผึ้งไทย และผึ้งชันโรง 
    </mdb-list-group-item>
    <mdb-list-group-item :action="true" href="#">งานวิจัยเกี่ยวกับรังผึ้งหลวงไทยในจังหวัดขอนแก่น
    </mdb-list-group-item>
  </mdb-list-group>
</template>

<script>
import { mdbListGroup, mdbListGroupItem } from 'mdbvue'
export default {
  name: 'papertable',
  components: {
    mdbListGroup,
    mdbListGroupItem
  }
}
</script>
<style scoped>
.popular{
  font-size: 12px;
  color: white;
  background-color: #E30B0B !important;
  border-color: #E30B0B;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  margin-left: 0px;
  margin-right: 0px;
  border-bottom-width: 1px;
  border-radius: 1000px;
}
.new{
  font-size: 12px;
  color: white;
  background-color: #E3B800 !important;
  border-color: #E3B800;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  margin-left: 0px;
  margin-right: 0px;
  border-bottom-width: 1px;
  border-radius: 1000px;
}
.updated{
  font-size: 12px;
  color: white;
  background-color: #5D8B27 !important;
  border-color: #5D8B27;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  margin-left: 0px;
  margin-right: 0px;
  border-bottom-width: 1px;
  border-radius: 1000px;
}
.list-group .list-group-item:last-child {
    border-bottom-left-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
}
.list-group .list-group-item:first-child {
    border-top-left-radius: 5px !important;
    border-top-right-radius: 5px !important;
}
</style>
