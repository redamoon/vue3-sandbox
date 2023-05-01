<script>
import { useCounterStore } from '../../stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()

    return {
      counterStore
    }
  },
  mounted() {
    console.log('mounted')
    console.log(this.counterStore.count)
  }
}
</script>
<template>{{ counterStore.count }}</template>
