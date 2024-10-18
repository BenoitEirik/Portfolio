<script lang="ts" setup>
const props = defineProps<{
  title: string,
  to: string
}>()
</script>

<template>
  <div class="p-8 flex justify-center items-center">
    <NuxtLink :to="to"
      class="[&>header]:hover:-translate-x-1 [&>header]:hover:translate-y-2 relative border-b border-b-neutral-500 border-t-8 border-t-transparent hover:border-t-blue-500 w-full h-full text-4xl flex flex-col items-stretch hover:scale-105 hover:-translate-x-2 hover:translate-y-2 transition">
      <header
        class="z-10 shrink-0 bg-neutral-300 bg-opacity-20 backdrop-blur-md flex items-center justify-center p-2">
        <h2>{{ props.title }}</h2>
      </header>
      <!-- TODO: add img from a prop -->
      <div class="grow min-h-0">
        <img class="w-full h-full object-contain bg-neutral-800 bg-opacity-50 backdrop-blur-md"
          src="/—Pngtree—silver eagle logo for gaming_6352572.png">
      </div>
      <span class="absolute w-1 h-1 -left-2 bottom-0 bg-neutral-400" />
      <span class="absolute w-1 h-1 -right-2 bottom-0 bg-neutral-400" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>