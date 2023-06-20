<template>
  <div class="min-h-[400px] border py-10 px-5">
    <h1 class="text-center text-3xl">Add Post</h1>

    <Form @submit="onSubmit" :validation-schema="validationSchema" class="mx-auto max-w-[400px] mt-9">
      <div class="space-y-6">
        <TextBox name="blogTitle" label="Title" />
        <div class="text-left">
          <label for="blogCoverPhoto" class="mb-1 inline-block text-primary">Cover Photo</label>
          <div>
            <Field name="blogCoverPhoto" type="file" class="border h-[40px] px-2 bg-slate-100 rounded-sm w-full" />
          </div>
          <ErrorMessage name="blogCoverPhoto" class="text-[.9rem] text-red-500" />
        </div>
        <div class="text-left">
          <label for="content" class="mb-1 inline-block text-primary">Content</label>
          <div>
            <Field name="content" as="textarea" rows="6" class="p-3 bg-slate-100 rounded-sm w-full" />
          </div>
          <ErrorMessage name="content" class="text-[.9rem] text-red-500" />
        </div>
      </div>
      <div class="mt-[30px]">
        <button type="submit"
          class="bg-black rounded-full py-[9px] px-5 text-center uppercase text-white hover:bg-slate-700 text-[.8rem] flex gap-2 mx-auto"
          :disabled="loading">
          <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px"
            fill="white" :class="{
              'animate-spin': loading
            }">
            <path
              d="M10.9999 2.04932L11 5.07082C7.6077 5.55605 5 8.47346 5 11.9999C5 15.8659 8.13401 18.9999 12 18.9999C13.5723 18.9999 15.0236 18.4815 16.1922 17.6063L18.3289 19.7427C16.605 21.1535 14.4014 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81462 5.94662 2.55109 10.9999 2.04932ZM21.9506 13C21.7509 15.011 20.9555 16.8467 19.7433 18.3282L17.6064 16.1921C18.2926 15.2759 18.7595 14.1859 18.9291 12.9999L21.9506 13ZM13.0011 2.04942C17.725 2.51895 21.4815 6.27583 21.9506 10.9998L18.9291 10.9997C18.4905 7.93446 16.0661 5.50985 13.001 5.07096L13.0011 2.04942Z">
            </path>
          </svg>
          <span>Submit</span>
        </button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { TextBox } from '@/components/common';
import { post_collection } from '@/firebase';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { defineComponent } from "vue";
import * as yup from 'yup';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';

const validationSchema = yup.object({
  blogTitle: yup.string().required(),
  blogCoverPhoto: yup.mixed().required(),
  content: yup.string().required(),
});

export default defineComponent({
  name: "create-post-page",
  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore)
    return { validationSchema, user }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    onSubmit(values: any, { resetForm }: any) {
      const file = values.blogCoverPhoto
      const fileName = file.name;

      const toast = (this as any).toast;

      this.onUploadImage(file, async (url) => {

        const postDoc = post_collection.doc()
        const timestamp = await Date.now();

        try {
          await postDoc.set({
            blogID: postDoc.id,
            content: values.content,
            blogCoverPhoto: url,
            blogCoverPhotoName: fileName,
            blogTitle: values.blogTitle,
            profileId: this.user?.profileId,
            date: timestamp,
          })

          toast({ message: 'Post uploaded successfully', type: 'success' });
          this.loading = false;
          resetForm()
        } catch (error: any) {
          toast({ message: error?.message || "something went wrong", type: 'error' });
          this.loading = false
        }


      })

    },
    async onUploadImage(file: any, callback: (url: string) => void) {
      const toast = (this as any).toast;
      this.loading = true;

      try {
        const fd = new FormData();
        fd.append("upload_preset", 'fireblog');
        fd.append("cloud_name", 'osdev');
        fd.append("file", file);

        const result = await axios({
          method: "POST",
          url: 'https://api.cloudinary.com/v1_1/osdev/image/upload',
          data: fd,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }) as any;

        const url = result.data.secure_url as any;
        callback(url)
      } catch (error: any) {
        toast({ message: error?.message || "something went wrong", type: 'error' });
        this.loading = false
      }
    }
  },
  components: {
    Form,
    TextBox,
    Field,
    ErrorMessage
  }
});
</script>
