<script lang="ts" setup>

</script>

<template>
  <div>
    <header class="flex items-center justify-start gap-4 px-8 py-4">
      <div class="grid grid-cols-2 grid-rows-2 gap-2 align-middle">
        <span v-for="i in 4" class="h-4 w-5 bg-neutral-300/20" :class="{ 'bg-orange-400': i === 1 }" />
      </div>
      <h1 class="text-5xl">Portfolio</h1>
    </header>
  </div>
</template>

<style>

</style>