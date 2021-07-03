<template>
  <div id="app">
    <router-view class="page"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  components: {Footer}
}
</script>

<style lang="scss">

body, .page {
  min-height: 100vh;
  background: #f1f1f1;
}

</style>
