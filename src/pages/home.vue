<template>
  <div class="p-0">
   <Hero />
   <Featured />
   <RecentBlogs />
   <Banner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Featured, Hero, RecentBlogs,  Banner } from '@/components/home'

export default defineComponent({
  name: "Home-page",
  components: {
    Hero,
    Featured,
    RecentBlogs,
    Banner
}
});
</script>
