<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer v-if="navigation" />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      navigation: true
    }
  },
  created() {
    this.checkRoute()
  },
  methods: {
    checkRoute() {
      const pathname = this.$route.name;

      if (pathname === 'login' || pathname === 'register') {
        this.navigation = false;
      } else {
        this.navigation = true
      }
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  },
  components: {
    Navbar,
    Footer
  },
};
</script>
