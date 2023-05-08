import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    user: {}
  }),
  getters: {
    getUser: ({ user }) => user
  },
  actions: {
    async fetchUser() {
      try {
        console.log('Options API mounted')
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
          .then((response) => response.json())
          .then((data) => data)
        this.user = JSON.parse(JSON.stringify(res))
      } catch (e) {
        console.error(e)
      }
    }
  }
})
