<template>
  <div class="text-left">
    <label for="email" class="mb-1 inline-block text-primary">{{ label }}</label>
    <div>
      <Field :name="name" type="text" class="border h-[40px] px-2 bg-slate-100 rounded-sm w-full" />
    </div>
    <ErrorMessage :name="name" class="text-[.9rem] text-red-500" />
  </div>
</template>

<script lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'text-box',
  props: ['name', 'label'],
  components: {
    Field,
    ErrorMessage
  },
}
</script>
