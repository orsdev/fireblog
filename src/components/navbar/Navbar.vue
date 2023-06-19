<template>
  <nav class="w-full bg-white py-4 px-5 border border-b-2 border-gray-200">
    <div class="max-w-xl lg:max-w-7xl mx-auto flex items-center justify-between space-x-4">
      <h1 class="text-xl font-bold text-gray-500">
        <router-link to="/"> FireBlog </router-link>
      </h1>
      <div class="flex space-x-6 md:space-x-10 items-center">

        <li v-for="item in NavbarMockData" :key="item.id"
          class="hidden md:flex font-normal cursor-pointer hover:text-blue-400 text-[.9rem] uppercase">
          <router-link :to="item.href"> {{ item.title }}</router-link>
        </li>
        <router-link to="/create-post" v-if="user">Create Post</router-link>
        <menu-dropdown />
        <ProfileMenu v-if="user" />

        <router-link v-if="!user"
          class="hidden xs:inline-block font-normal cursor-pointer hover:text-blue-400 text-md uppercase text-[.9rem]"
          to="/login">
          Login/Register
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { NavbarMockData } from "./constant";
import ProfileMenu from "./profile-menu/ProfileMenu.vue";
import MenuDropdown from "./menu-dropdown/MenuDropdown.vue";
import { useUserStore } from "@/store";
import { storeToRefs } from "pinia";

export default {
  name: "navbar",
  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);

    return { user }
  },
  data() {
    return {
      NavbarMockData,
      toggleNav: false
    };
  },
  components: { ProfileMenu, MenuDropdown },
};
</script>
