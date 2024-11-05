<script lang="ts" setup>
const props = defineProps<{
  title: string,
  to: string
}>()
</script>

<template>
  <div class="flex items-center justify-center p-4">
    <NuxtLink :to="props.to"
      class="relative flex h-full w-full flex-col items-stretch gap-1 outline-none transition hover:scale-105 focus:scale-105 active:scale-100 [&_#cov]:hover:scale-105 [&_#cov]:focus:scale-105 [&_#tb]:hover:bg-amber-600 [&_#tb]:focus:bg-amber-600 [&_header]:hover:bg-amber-600/50 [&_header]:focus:bg-amber-600/50"
      style="cursor: url('/cursors/The_Division_1/TD_link.cur'), pointer;">
      <span id="tb" class="block h-2 bg-transparent transition" />
      <div
        class="square-pixels-on-extremities flex min-h-0 grow flex-col items-stretch justify-center border-b border-b-neutral-500 bg-neutral-600/50 backdrop-blur-md">
        <header class="z-10 flex shrink-0 items-center justify-center bg-neutral-300/20 p-2 transition">
          <h2 class="text-3xl">{{ props.title }}</h2>
        </header>
        <div class="min-h-0 grow">
          <div id="cov" class="flex h-full w-full items-center justify-center object-contain p-4 transition">
            <slot name="picture" id="rr" />
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>