<template>
  <div class="main-body" id="app" style="font-family: 'Chakra Petch', sans-serif;">
    <component :is="layout">
      <router-view :layout.sync="layout"/>
    </component>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      layout: 'div'
    }
  }
}
</script>

<style>
</style>
