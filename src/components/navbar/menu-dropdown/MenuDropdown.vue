<template>
  <Menu as="div" class="relative inline-block md:hidden">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="flex flex-col p-3 px-4 gap-3 items-start">
          <MenuItem v-slot="{ active }" v-for="item in NavbarMockData" :key="item.id">
            <router-link :to="item.href" class="font-normal cursor-pointer hover:text-blue-400 text-[.9rem] uppercase"> {{ item.title }}</router-link>
          </MenuItem>
          <!-- <MenuItem> -->
            <button type="button" class="inline-block xs:hidden pl-0 m-0 font-normal cursor-pointer hover:text-blue-400 text-[.9rem] uppercase"> Login/Register</button>
          <!-- </MenuItem> -->
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { NavbarMockData } from "../constant";

export default {
  name: "menu-dropdown",
  data(){
   return {
    NavbarMockData
   }
  },
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
};
</script>
