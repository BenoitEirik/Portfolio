<script lang="ts" setup>
onBeforeMount(() => navigateTo('portfolio/projets'))
</script>

<template>
  <div class="flex flex-col gap-4 p-8">
    <header class="flex items-center justify-start gap-4">
      <div class="grid grid-cols-2 grid-rows-2 gap-2 align-middle">
        <span v-for="i in 4" class="h-4 w-5 bg-neutral-600/20" :class="{ 'bg-orange-400/100': i === 1 }" />
      </div>
      <h1 class="text-5xl">Portfolio</h1>
    </header>

    <Tab :items="[
      {
        title: 'Projets',
        fullPath: '/portfolio/projets'
      },
      {
        title: 'Compétences techniques',
        fullPath: '/portfolio/competences-techniques'
      },
      {
        title: 'Compétences humaines',
        fullPath: '/portfolio/competences-humaines'
      }
    ]" />

    <section class="border border-neutral-500">
      <NuxtPage  />
    </section>
  </div>
</template>

<style>

</style>