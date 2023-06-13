<template>
  <two-column :reverse=false imageUrl="https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FVue%20Router%20-%20Page%20Titles.png?alt=media&token=3276b1b3-3709-4ff0-bd4a-2de3acd1ad65" name="column-1">
    <template #content>
      <h2 class="text-[25px] lg:text-[40px] font-light">
      DYNAMIC PAGE TITLES WITH THE VUE ROUTER
    </h2>
      <p class="text-[15px] font-light my-6">In this video we take a look at creating...</p>
      <router-link
          class="flex items-center font-normal cursor-pointer uppercase text-[.9rem] hover:underline"
          to="#"
        >
        <span>
          VIEW THE POST
        </span>
        <span class="relative top-[-2px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="15" height="15" fill="black">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
        </span>
        </router-link>
    </template>
  </two-column>

  <two-column :reverse=true name="column-2" imageUrl="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80">
    <template #content>
      <h2 class="text-[25px] lg:text-[40px] font-light">
        CSS TRANSFORM: SKEWY | CREATE A SLANTED/SKEWED DIV
    </h2>
      <p class="text-[15px] font-light my-6">In this video we take a look at creating...</p>
      <router-link
          class="flex items-center font-normal cursor-pointer uppercase text-[.9rem] hover:underline"
          to="#"
        >
        <span>
          VIEW THE POST
        </span>
        <span class="relative top-[-2px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="15" height="15" fill="black">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
        </span>
        </router-link>
    </template>
  </two-column>

  
</template>

<script lang="ts">
import { TwoColumn } from '../common';

export default {
    name: "featured",
    components: { TwoColumn }
}
</script>
