<script lang="ts" setup>
const props = defineProps<{
  title: string,
  to: string
}>()
</script>

<template>
  <div class="flex items-center justify-center">
    <NuxtLink :to="props.to"
      class="relative flex h-full w-full flex-col items-stretch gap-1 outline-none transition hover:scale-105 focus:scale-105 active:scale-100 [&_h2]:focus:font-bold [&_h2]:hover:font-bold [&_#cov]:hover:scale-105 [&_#cov]:focus:scale-105 [&_#tb]:hover:bg-focus [&_#tb]:focus:bg-focus [&_header]:hover:bg-focus/50 [&_header]:focus:bg-focus/focus-opacity">
      <span id="tb" class="block h-2 transition bg-transparent" />
      <div
        class="flex flex-col items-stretch justify-center border-b-2 square-pixels-on-extremities grow border-b-secondary/secondary-opacity bg-primary/primary-opacity backdrop-blur-primary">
        <header class="z-10 flex items-center justify-center p-2 transition shrink-0 bg-secondary/secondary-opacity">
          <h2 class="text-3xl line-clamp-1">{{ props.title }}</h2>
        </header>
        <div class="grow">
          <div id="cov" class="flex items-center justify-center object-contain w-full h-full p-4 transition">
            <slot name="picture" id="rr" />
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>