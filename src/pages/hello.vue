<template>
  <div>hello</div>
  <div>{{ app.token }}</div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const app = useAppStore()

onMounted(() => {
  app.updateToken('xxx')
})
</script>

<style scoped></style>
