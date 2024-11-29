<script lang="ts" setup>
const props = defineProps<{
  title: string,
  to: string
}>()
</script>

<template>
  <div class="flex items-center justify-center">
    <NuxtLink :to="props.to" :aria-label="props.title"
      class="group relative flex h-full w-full flex-col items-stretch gap-1 outline-none transition hover:scale-105 focus:scale-105 active:scale-100">
      <span class="h-2 bg-transparent transition group-hover:bg-focus group-focus:bg-focus" />
      <div
        class="square-pixels-on-extremities grow flex flex-col items-stretch border-b-2 border-b-secondary/secondary-opacity bg-primary/primary-opacity backdrop-blur-primary">
        <header class="flex items-center justify-center bg-secondary/secondary-opacity p-2 transition group-hover:bg-focus/50 group-focus:bg-focus/focus-opacity">
          <h2 class="line-clamp-1 text-3xl transition group-hover:font-bold group-focus:font-bold">{{ props.title }}</h2>
        </header>
        <div class="grow">
          <div class="flex h-full w-full items-center justify-center p-4 transition group-hover:scale-105 group-focus:scale-105">
            <slot name="picture" />
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>