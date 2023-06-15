<template>
  <div class="py-[100px] px-[20px] sm:px-[9vw] bg-gray-100">
    <h2 class="text-[20px] md:text-[30px] font-light text-primary mb-14">View More Recent Blogs</h2>
  
    <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,_1fr))] gap-[20px] gap-y-14">
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3032"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="303h"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3034"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="303s"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3036"/>
      <article-card title="Devtool Flexbox Feature" time_uploaded="April 29, 2021" id="3"/>
 
    </div>
    </div>
</template>

<script lang="ts">
import {ArticleCard} from '@/components/common';

export default {
  name: 'recent-blogs',
  components: {ArticleCard}
}
</script>