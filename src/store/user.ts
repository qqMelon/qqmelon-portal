import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userData: {},
    }),
    getters: {},
    actions: {}
})