<template>
  <div class="p-0">
   <Hero />
   <Featured />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Featured, Hero } from '@/components/home'

export default defineComponent({
  name: "Home-page",
  components: {
    Hero,
    Featured
}
});
</script>
