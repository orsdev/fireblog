<template>
  <div class="my-20 px-[30px] sm:px-[10vw] min-h-[400px] container" v-if="post">
    <h2 class="my-7 text-[28px]">{{ post.blogTitle }}</h2>
    <img :src="post.blogCoverPhoto" :alt="post.blogTitle" class="mb-7" />
    <p>{{ post.content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArticleCard } from "@/components/common";
import { usePostsStore } from "@/store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "single-blog-page",
  setup() {
    const storePosts = usePostsStore();
    const { posts } = storeToRefs(storePosts)

    return { posts }
  },
  data() {
    return {
      post: null as any
    }
  },
  mounted() {
    const param = this.$route.params;
    const id = param.id;

    const blog = this.posts.filter(post => post.blogID === id);
    if (blog.length == 0) {
      this.$router.push('/')
    } else {
      this.post = blog[0];
    }
  },
  components: {
    ArticleCard,
  },
});
</script>
