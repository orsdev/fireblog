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
import { Featured, Hero, RecentBlogs, Banner } from '@/components/home'
import { usePostsStore } from "@/store";
import { storeToRefs } from "pinia";
import { post_collection } from "@/firebase";

export default defineComponent({
  name: "Home-page",
  setup() {
    const postStore = usePostsStore();
    const { posts } = storeToRefs(postStore)

    return { posts, updatePosts: postStore.updatePosts }
  },
  async created() {
    const toast = (this as any).toast;
    try {
      const collection = await post_collection.orderBy('date', 'desc');
      const result = await collection.get();

      result.forEach((doc) => {
        if (!this.posts.some((post: any) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            content: doc.data().content,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
            blogTitle: doc.data().blogTitle,
            profileId: doc.data().profileId,
            date: doc.data().date
          }
          this.posts.push(data)
        }
      })
    } catch (error: any) {
      toast({ message: error?.message || "something went wrong", type: 'error' });
    }
  },
  components: {
    Hero,
    Featured,
    RecentBlogs,
    Banner
  }
});
</script>
