import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userData: {
            user: {}
        },
    }),
    getters: {
        getUserData: function (): any {
           return this.userData?.user 
        }
    },
    actions: {
        addUserData: function (payload: any) {
            this.userData = payload;
        },
        removeUserData: function () {
            this.userData = { user: {} }
        }
    }
})