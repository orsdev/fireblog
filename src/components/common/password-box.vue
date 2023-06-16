<template>
  <div class="text-left">
    <label for="password" class="mb-1 inline-block text-primary">Password</label>
    <div>
      <Field name="password" type="password" class="border h-[40px] px-2 bg-slate-100 rounded-sm w-full" />
    </div>
    <ErrorMessage name="password" class="text-[.9rem] text-red-500" />
  </div>
</template>

<script lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'password-box',
  components: {
    Field,
    ErrorMessage
  },
}
</script>
