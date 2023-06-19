<template>
  <div class="py-[100px] px-[20px] sm:px-[9vw] bg-gray-100">
    <h2 class="text-[20px] md:text-[30px] font-light text-primary mb-14">View More Recent Blogs</h2>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,_1fr))] gap-[20px] gap-y-14">
      <article-card v-for="post in posts" :key="post.blogTitle" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { usePostsStore } from '@/store';
import { ArticleCard } from '@/components/common';

export default {
  name: 'recent-blogs',
  setup() {
    const storePosts = usePostsStore();
    return { posts: storePosts.posts }
  },
  components: { ArticleCard }
}
</script>