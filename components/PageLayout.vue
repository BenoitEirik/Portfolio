<script lang="ts" setup>
const props = defineProps<{
  title: string,
  pageNumber: number
}>()
</script>

<template>
  <div class="flex flex-col gap-8 p-8">
    <header class="flex items-center justify-start gap-4">
      <div class="grid grid-cols-2 grid-rows-2 gap-2 align-middle">
        <span v-for="i in 4" class="h-4 w-5 bg-neutral-600/50 backdrop-blur-md" :class="{ '!bg-amber-600': i === props.pageNumber }" />
      </div>
      <h1 class="pt-2 text-5xl">{{ props.title }}</h1>
    </header>

    <slot name="body" />
  </div>
</template>

<style></style>