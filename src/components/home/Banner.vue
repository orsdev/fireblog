<template>
  <div class="py-[100px] px-[20px] sm:px-[9vw] grid sm:grid-cols-2 gap-10 items-center justify-center sm:justify-between">
    <h2 class="text-[25px] lg:text-[40px] font-light text-primary max-w-[400px]">
      NEVER MISS A POST. REGISTER FOR YOUR FREE ACCOUNT TODAY!
    </h2>
    <div>
    <router-link class=" mx-auto sm:mx-0 sm:ml-auto flex justify-center items-center font-normal cursor-pointer uppercase text-[.8rem] bg-black text-white w-[200px] text-center px-5 py-3 rounded-lg hover:bg-slate-700"
          to="`blog/${{id}}`">
          <span>
           Register
          </span>
          <span class="relative top-[-1px] ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="13" height="13" fill="white">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
              </path>
            </svg>
          </span>
        </router-link>
      </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'banner'
}
</script>