<template>
  <div class="grid sm:grid-cols-[1fr,1.5fr]">
    <div class="bg-primary text-white py-[16vw] lg:py-[10vw] px-[9vw] max-h-[650px]">
      <h2 class="text-[30px] md:text-[40px] font-light">WELCOME!</h2>
      <p class="text-[15px] font-light my-6">Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to
        never miss a post!</p>
      <router-link
          class="flex items-center font-normal cursor-pointer uppercase text-[.9rem]"
          to="/login"
        >
        <span>
          Login/Register 
        </span>
        <span class="relative top-[-2px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="15" height="15" fill="white">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
        </span>
        </router-link>
    </div>
    <div class="bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-left-top h-[50vw] sm:h-auto" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'hero'
}
</script>
