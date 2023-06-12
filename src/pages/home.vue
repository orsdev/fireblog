<template>
  <div class="p-0">
   <Hero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Hero } from '@/components/home'

export default defineComponent({
  name: "Home-page",
  components: {
    Hero
  }
});
</script>
