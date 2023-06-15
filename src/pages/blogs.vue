<template>
   <div class=" my-20 px-[30px] sm:px-[10vw] grid grid-cols-[repeat(auto-fill,minmax(270px,_1fr))] gap-[20px] gap-y-14">
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3032"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="303h"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3034"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="303s"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3036"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3"/>
 
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {ArticleCard} from '@/components/common';

export default defineComponent({
  name: "blogs-page",
  components: {
    ArticleCard,
}
});
</script>
