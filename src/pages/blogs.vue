<template>
  <div class="my-20 px-[30px] sm:px-[10vw] grid grid-cols-[repeat(auto-fill,minmax(270px,_1fr))] gap-[20px] gap-y-14">
    <article-card v-for="post in posts" :key="post.blogTitle" :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArticleCard } from "@/components/common";
import { usePostsStore } from "@/store";

export default defineComponent({
  name: "blogs-page",
  setup() {
    const storePosts = usePostsStore();
    return { posts: storePosts.posts }
  },
  components: {
    ArticleCard,
  },
});
</script>
