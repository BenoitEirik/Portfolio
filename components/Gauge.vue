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
      <span class="text-secondary">{{ level }} / 5</span>
    </div>
    <div class="flex w-full gap-2 border-x-2 border-x-secondary">
      <div v-for="i in 5" class="h-2 grow bg-black/50" :class="{ '!bg-teal-600': i <= props.level }" />
    </div>
  </div>
</template>

<style></style>