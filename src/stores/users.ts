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
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
          .then((response) => response.json())
          .then((data) => data)
        const dummy = { id: 1, name: 'dummy' }
        this.user = { ...dummy }
        console.log(this.user)
      } catch (e) {
        console.error(e)
      }
    }
  }
})
