import { defineStore } from "pinia";

type UserProps = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null as UserProps | null
    };
  },
  getters: {
    username(state) {
      return state.user?.username || ''
    }
  },
  actions: {
    setUser(payload: any) {
      this.user = payload;
    },
    logOut() {
      this.user = null;
    }
  }
});
