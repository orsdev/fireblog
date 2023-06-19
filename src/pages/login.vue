<template>
  <div class="grid md:grid-cols-[1fr,_1.5fr] min-h-screen h-full overflow-hidden">
    <div class="relative flex h-full px-10 sm:px-[6vw] w-full">
      <div class="py-[10vw] text-center w-full">
        <p class="font-light text-primary flex flex-wrap justify-center gap-1 items-center">Don't have an account?
          <router-link class="inline-block font-bold cursor-pointer hover:text-blue-400 text-md uppercase text-[.9rem]"
            to="/register">
            Register
          </router-link>
        </p>
        <h2 class="text-[2rem] font-bold my-[30px]">Login to FireBlog</h2>
        <Form @submit="onSubmit" :validation-schema="validationSchema" class="w-[95%] mx-auto  max-w-[350px]">
          <EmailBox />
          <div class="my-3" />
          <PasswordBox />
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
              <span>Sign in</span>
            </button>
          </div>
        </Form>
      </div>
      <div class="rotate-[3deg] h-[102%] absolute -right-10 -top-2 bg-white w-[100px]" />
    </div>
    <div class="hidden md:block bg-slate-700">Image</div>
  </div>
</template>

<script lang="ts">
import { Form } from 'vee-validate';

import { auth, user_collection } from '../firebase';
import { EmailBox, PasswordBox } from '@/components/common';
import * as yup from 'yup';
import { useUserStore } from '@/store';

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
});

export default {
  name: "login-page",
  components: {
    EmailBox,
    PasswordBox,
    Form
  },
  data() {
    return {
      loading: false
    }
  },
  setup() {
    const userStore = useUserStore();
    return { validationSchema, user: userStore.user, setUser: userStore.setUser }
  },
  methods: {
    async onSubmit(values: any) {
      this.loading = true;
      const toast = (this as any).toast;

      try {
        const userCredential = await auth.signInWithEmailAndPassword(values.email, values.password);
        this.loading = false;

        const user = userCredential.user;

        // Retrieve additional user info from Firestore
        const uid = user.uid;
        const userDocRef = user_collection.doc(uid);

        try {
          const docRef = await userDocRef.get();

          if (docRef.exists) {
            const data = docRef.data();
            this.loading = false;
            this.setUser({ ...data, profileId: uid });

            this.$router.push('/')
          } else {
            throw new Error('User info not found');
          }
        } catch (error: any) {
          throw new Error(error?.message);
        }

      } catch (error: any) {
        this.loading = false;
        toast({ message: error?.message || "something went wrong", type: 'error' });
      }
    }
  }
};
</script>
