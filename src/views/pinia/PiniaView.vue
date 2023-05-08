<script>
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useUsersStore } from '@/stores/users'

export default {
  setup() {
    const counterStore = useCounterStore()
    const usersStore = useUsersStore()
    onMounted(async () => {
      await usersStore.fetchUser()
      counterStore.increment()
      console.log('mounted')
      console.log(counterStore.count)
      console.log(usersStore.user.name)
    })
    return {
      message: 'Hello world!',
      counterStore,
      usersStore
    }
  },
  mounted() {
    this.usersStore.fetchUser()
    console.log(this.usersStore.user?.name)
    if (this.usersStore.user.name === 'Leanne Graham') return // ここの処理が通らない
    console.log('ある場合')
  }
}
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <p>{{ message }}</p>
</template>
