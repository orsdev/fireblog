<template>
  <two-column v-for="(post, index) in posts" :key="post.blogID" :reverse="index === 0" :imageUrl="post.blogCoverPhoto"
    name="column-1">
    <template #content>
      <h2 class="text-[25px] lg:text-[40px] font-light">
        {{ post.blogTitle }}
      </h2>
      <p class="text-[15px] font-light my-6">{{ post.content.substring(0, 50) }}...</p>
      <router-link class="flex items-center font-normal cursor-pointer uppercase text-[.9rem] hover:underline"
        :to="`blog/${post.blogID}`">
        <span>
          VIEW THE POST
        </span>
        <span class="relative top-[-2px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="15" height="15" fill="black">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
            </path>
          </svg>
        </span>
      </router-link>
    </template>
  </two-column>
</template>

<script lang="ts">
import { usePostsStore } from '@/store';
import { TwoColumn } from '../common';
import { storeToRefs } from 'pinia';

export default {
  name: "featured",
  setup() {
    const postStore = usePostsStore();
    const { blogPostFeed } = storeToRefs(postStore)

    return { posts: blogPostFeed }
  },
  components: { TwoColumn }
}
</script>
