<template>
  <div class="grid md:grid-cols-[1fr,_1.5fr] min-h-screen h-full overflow-hidden">
    <div class="relative flex h-full px-10 sm:px-[6vw] w-full">
      <div class="py-[10vw] text-center w-full">
        <p class="font-light text-primary flex flex-wrap justify-center gap-1 items-center">Don't have an account?
          <router-link class="inline-block font-bold cursor-pointer hover:text-blue-400 text-md uppercase text-[.9rem]"
            to="/login">
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
              class="bg-black rounded-full py-[9px] px-5 text-center uppercase text-white hover:bg-slate-700 text-[.8rem]">Sign
              in</button>
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
import { EmailBox, PasswordBox } from '@/components/common';
import * as yup from 'yup';

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
  setup() {
    return { validationSchema }
  },
  methods: {
    onSubmit(values: any) {
      console.log(values)
    }
  }
};
</script>
