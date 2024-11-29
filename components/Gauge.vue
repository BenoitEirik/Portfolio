<script lang="ts" setup>
const props = defineProps<{
  title: string,
  level: number
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-end justify-between gap-4">
      <span class="text-xl">{{ props.title }}</span>
      <span class="text-secondary">{{ props.level }} / 5</span>
    </div>
    <div class="flex w-full gap-2 border-x-2 border-x-secondary">
      <div v-for="i in 5" :key="i" :class="['h-2 grow', i <= props.level ? 'bg-teal-600' : 'bg-black/50']" />
    </div>
  </div>
</template>

<style></style>