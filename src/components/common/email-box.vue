<template>
  <div class="text-left">
    <label for="email" class="mb-1 inline-block text-primary">Email</label>
    <div>
      <Field name="email" type="email" class="border h-[40px] px-2 bg-slate-100 rounded-sm w-full" />
    </div>
    <ErrorMessage name="email" class="text-[.9rem] text-red-500" />
  </div>
</template>

<script lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'email-box',
  components: {
    Field,
    ErrorMessage
  },
}
</script>
