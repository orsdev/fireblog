<template>
<div class="py-[100px] px-[20px] sm:px-[9vw] grid sm:grid-cols-3 justify-center gap-10 text-white items-center bg-primary">
   <h2 class="text-[1.5rem]">Fireblog</h2>
   <div class="flex flex-col gap-4 uppercase">
    <router-link to="/"> Home </router-link>
    <router-link to="/"> Blogs </router-link>
    <router-link to="/"> Log in / Register </router-link>
   </div>
   <p>Copyright 2021 All Rights Reserved</p>
</div>
</template>

<script lang="ts">
  export default {
    name: 'footer'
  }
</script>