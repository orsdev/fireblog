<template>
  <div class="grid md:grid-cols-[1fr,_1.5fr] min-h-screen h-full overflow-hidden">
    <div class="relative flex h-full px-10 sm:px-[6vw] w-full">
      <div class="py-[10vw] text-center w-full">
        <p class="font-light text-primary flex flex-wrap justify-center gap-1 items-center">Already have an account?
          <router-link class="inline-block font-bold cursor-pointer hover:text-blue-400 text-md uppercase text-[.9rem]"
            to="/login">
            Log in
          </router-link>
        </p>
        <h2 class="text-[2rem] font-bold my-[30px]">
          Create your FireBlog account
        </h2>
        <Form @submit="onSubmit" :validation-schema="validationSchema" class="w-[95%] mx-auto  max-w-[350px]">
          <TextBox name="first_name" label="First name" />
          <div class="my-3" />
          <TextBox name="last_name" label="Last name" />
          <div class="my-3" />
          <TextBox name="username" label="Username" />
          <div class="my-3" />
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
              <span>Sign up</span>
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
import { EmailBox, PasswordBox, TextBox } from '@/components/common';
import { auth, user_collection } from '../firebase';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().required().email(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required().min(5),
});

export default {
  name: "register-page",
  components: {
    TextBox,
    EmailBox,
    PasswordBox,
    Form
  },
  setup() {
    return { validationSchema }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async onSubmit(values: any, { resetForm }: any) {
      this.loading = true;
      const toast = (this as any).toast;

      try {
        const createUser = await auth.createUserWithEmailAndPassword(values.email,
          values.password
        );

        let uid = "";

        if (createUser.user) {
          uid = createUser.user.uid;
        }

        try {
          await user_collection.doc(uid).set({
            ...values,
          });

          await createUser.user?.updateProfile({
            displayName: values.first_name,
          });

          this.loading = false;
          resetForm()
          toast({ message: 'Account created successfully' });

        } catch (error: any) {
          throw new Error(error?.message);
        }
      } catch (err: any) {
        this.loading = false;

        toast({ message: err?.message || 'something went wrong', type: 'error' });
      }
      return;
    }
  }
};
</script>
