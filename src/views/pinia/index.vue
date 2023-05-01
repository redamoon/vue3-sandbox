<script>
import { useUserStore } from '@/store/modules/user'
import { useCounterStore } from '@/store/modules/counter'

export default {
  name: 'PiniaView',
  setup() {
    const userStore = useUserStore()
    const counterStore = useCounterStore()

    return {
      userStore,
      counterStore
    }
  }
}
</script>

<template>
  <div>
    <h1>Pinia2</h1>
    <p>ユーザー名: {{ userStore.user.name }}</p>
    <p>カウンター: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">カウントアップ</button>
  </div>
</template>
