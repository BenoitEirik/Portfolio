<script lang="ts" setup>
const props = defineProps<{
  title: string,
  to: string
}>()
</script>

<template>
  <div class="flex items-center justify-center p-8">
    <NuxtLink :to="props.to"
      class="relative flex h-full w-full flex-col items-stretch gap-1 text-4xl transition hover:[transform:perspective(800px)translateZ(2rem)] [&_#cov]:hover:[transform:perspective(800px)translateZ(2rem)] [&_#tb]:hover:bg-amber-600 [&_#tb]:hover:[transform:perspective(800px)translateZ(2rem)] [&_header]:hover:bg-amber-600/50 [&_header]:hover:[transform:perspective(800px)translateZ(2rem)]"
      style="cursor: url('/cursors/The_Division_1/TD_link.cur'), pointer;">
      <span id="tb" class="block h-4 transition bg-transparent" />
      <div
        class="flex flex-col items-stretch justify-center min-h-0 border-b grow border-b-neutral-500 bg-neutral-600/50 backdrop-blur-md">
        <header class="z-10 flex items-center justify-center p-2 transition shrink-0 bg-neutral-300/20">
          <h2>{{ props.title }}</h2>
        </header>
        <div class="min-h-0 grow">
          <div id="cov" class="flex items-center justify-center object-contain w-full h-full p-4 transition">
            <slot name="picture" id="rr" />
          </div>
        </div>
        <span class="absolute bottom-0 w-1 h-1 -left-2 bg-neutral-400" />
        <span class="absolute bottom-0 w-1 h-1 -right-2 bg-neutral-400" />
      </div>

    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>