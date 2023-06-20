import { defineStore } from "pinia";

type PostProps = {
  blogID: string
  content: string,
  blogCoverPhoto: string,
  blogCoverPhotoName: string,
  blogTitle: string,
  profileId: string
  date: string
}

export const usePostsStore = defineStore("posts", {
  state: () => {
    return {
      posts: [] as PostProps[]
    };
  },
  getters: {
    blogPostFeed(): PostProps[] {
      return this.posts.slice(0, 2)
    },
    blogPosts(): PostProps[] {
      return this.posts.slice(2, 6)
    },
  },
  actions: {
    updatePosts(payload: any) {
      this.posts = payload;
    },
  }
});
