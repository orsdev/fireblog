<template>
  <div class="border rounded-lg relative">
    <div class="absolute top-2 right-2 w-full flex justify-end gap-4 ">
      <button class="bg-white w-[25px] h-[25px] rounded-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="black">
          <path
            d="M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z">
          </path>
        </svg>
      </button>
      <button class="bg-white w-[25px] h-[25px] rounded-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="black">
          <path
            d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z">
          </path>
        </svg>
      </button>
    </div>
    <img :src="post.blogCoverPhoto" :alt="post.blogTitle" class="w-full h-auto lg:h-[15vw] max-h-[200px] object-cover">
    <div class="p-5 text-primary">
      <h4 class="text-[16px] md:text-[18px] font-light  mb-5">{{ post.blogTitle }}</h4>
      <p class="text-[.8rem]">Poster on: {{ formattedDate }}</p>
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
import dayjs from 'dayjs';

export default {
  name: 'article-card',
  props: ['post'],
  computed: {
    formattedDate() {
      const date = this.post.blogDate;
      return dayjs(date).format('DD MMM, YYYY')
    }
  }
}
</script>