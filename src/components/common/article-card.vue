<template>
  <div class="border rounded-lg">
    <img
      src="https://images.unsplash.com/photo-1686515815090-fcf7f9028950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=40"
      alt="image" class="w-full h-auto lg:h-[15vw] max-h-[240px]">
    <div class="p-5 text-primary">
      <h4 class="text-[16px] md:text-[18px] font-light  mb-5">{{ title }}</h4>
      <p class="text-[.8rem]">Poster on: {{ time_uploaded }}</p>
      <div class="mt-[45px]">
        <router-link class="flex items-center font-normal cursor-pointer uppercase text-[.8rem] hover:underline"
          to="`blog/${{id}}`">
          <span>
            VIEW THE POST
          </span>
          <span class="relative top-[-1px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="13" height="13" fill="black">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
              </path>
            </svg>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'article-card',
  props: {
    title: String,
    time_uploaded: String,
    id: Number
  }
}
</script>