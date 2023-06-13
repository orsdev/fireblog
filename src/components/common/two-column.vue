<template>
  <div class="md:flex w-full" :class="{
    'flex-row-reverse': reverse, 
    'flex-row': !reverse
  }">
<div class="flex-1 hidden md:block" >
  <img :src="imageUrl" alt="name" class="h-full w-full">
  </div>
<div class="w-full md:w-[40%] text-primary py-[16vw] lg:py-[12vw] px-[9vw] max-h-[650px]" >
 <slot name="content"></slot>
</div>
  </div>

</template>

<script lang="ts">
  export default {
    name: 'two-column',
    props: {
      reverse: Boolean,
      imageUrl: String,
      name: String
    }
  }
</script>