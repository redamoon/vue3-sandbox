<script>
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useUsersStore } from '@/stores/users'

export default {
  setup() {
    console.log('setup')
    const counterStore = useCounterStore()
    const usersStore = useUsersStore()
    usersStore.fetchUser()
    // console.log(usersStore.user)
    onMounted(async () => {
      // counterStore.increment()
      console.log('onMounted')
      console.log(usersStore.user.name)
    })
    return {
      user: usersStore.user,
      message: 'Hello world!',
      counterStore,
      usersStore
    }
  },
  mounted() {
    console.log('mounted')
    // this.usersStore.fetchUser()
    console.log(this.user)
    if (this.user === 1) return // IDが1の場合はreturn
    console.log('idが一致しない')
  }
}
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <p>{{ message }}</p>
</template>
