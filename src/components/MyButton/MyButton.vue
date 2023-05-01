<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        default: 'primary'
        validator(value: unknown): boolean {
            return ['primary', 'secondary', 'tertiary'].includes(value as string)
        }
    },
    size:{
        type: String,
        default: 'medium'
        validator(value: unknown): boolean {
            return ['small', 'medium', 'large'].includes(value as string)
        }
    },
})
const emits = defineEmits(["click"]);
</script>
<template>
  <button class="btn" :class="[`btn--${variant}`, `btn--${size}`]" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<style scoped>
button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  padding: 1rem;
}
button.primary {
  background-color: #1ea7fd;
}
button.secondary {
  background-color: #ff7e00;
}

button.large {
  font-size: 1.25rem;
  padding: 1.25rem 1.5rem;
}

button.medium {
  font-size: 1rem;
  padding: 1rem 1.25rem;
}

button.small {
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
}
</style>
