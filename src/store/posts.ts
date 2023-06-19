import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => {
    return {
      posts: [
        { blogCoverPhoto: 'https://images.unsplash.com/photo-1686515815090-fcf7f9028950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=40', blogTitle: 'Dev Flex Feature', blogDate: new Date() },
        {
          blogCoverPhoto: 'https://images.unsplash.com/photo-1686515815090-fcf7f9028950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=40', blogTitle: 'Introduction to tech', blogDate: new Date(),
        }
      ]
    };
  }
});
