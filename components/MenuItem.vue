<script lang="ts" setup>
const props = defineProps<{
  title: string,
  to: string
}>()
</script>

<template>
  <div class="flex items-center justify-center p-8">
    <NuxtLink :to="props.to"
      class="relative flex h-full w-full flex-col items-stretch gap-1 text-4xl outline-none transition hover:[transform:perspective(800px)translateZ(2rem)] focus:[transform:perspective(800px)translateZ(2rem)] [&_#cov]:hover:[transform:perspective(800px)translateZ(2rem)] [&_#cov]:focus:[transform:perspective(800px)translateZ(2rem)] [&_#tb]:hover:bg-amber-600 [&_#tb]:hover:[transform:perspective(800px)translateZ(2rem)] [&_#tb]:focus:bg-amber-600 [&_#tb]:focus:[transform:perspective(800px)translateZ(2rem)] [&_header]:hover:bg-amber-600/50 [&_header]:hover:[transform:perspective(800px)translateZ(2rem)] [&_header]:focus:bg-amber-600/50 [&_header]:focus:[transform:perspective(800px)translateZ(2rem)]"
      style="cursor: url('/cursors/The_Division_1/TD_link.cur'), pointer;">
      <span id="tb" class="block h-4 bg-transparent transition" />
      <div
        class="flex min-h-0 grow flex-col items-stretch justify-center border-b border-b-neutral-500 bg-neutral-600/50 backdrop-blur-md">
        <header class="z-10 flex shrink-0 items-center justify-center bg-neutral-300/20 p-2 transition">
          <h2>{{ props.title }}</h2>
        </header>
        <div class="min-h-0 grow">
          <div id="cov" class="flex h-full w-full items-center justify-center object-contain p-4 transition">
            <slot name="picture" id="rr" />
          </div>
        </div>
        <span class="absolute -left-2 top-0 h-1 w-1 bg-neutral-400 transition" />
        <span class="absolute -right-2 top-0 h-1 w-1 bg-neutral-400 transition" />
        <span class="absolute -left-2 bottom-0 h-1 w-1 bg-neutral-400 transition" />
        <span class="absolute -right-2 bottom-0 h-1 w-1 bg-neutral-400 transition" />
      </div>

    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>