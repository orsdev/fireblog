<template>
  <div
    class="my-20 px-[30px] sm:px-[10vw] grid grid-cols-[repeat(auto-fill,minmax(270px,_1fr))] gap-[20px] gap-y-14 min-h-[400px]"
    :class="{ '!flex justify-center items-center': isEmpty }">
    <article-card v-for="post in posts" :key="post.blogTitle" :post="post" />
    <h1 class="text-[2rem]" v-show="isEmpty">Posts not Available</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArticleCard } from "@/components/common";
import { usePostsStore } from "@/store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "blogs-page",
  setup() {
    const storePosts = usePostsStore();
    const { posts } = storeToRefs(storePosts)

    return { posts }
  },
  computed: {
    isEmpty() {
      return this.posts.length === 0;
    }
  },
  components: {
    ArticleCard,
  },
});
</script>
