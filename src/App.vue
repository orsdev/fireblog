<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
};
</script>
