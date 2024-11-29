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
        <span v-for="i in 4" class="w-6 h-4 bg-secondary/secondary-opacity backdrop-blur-md"
          :class="{ '!bg-focus': i === props.pageNumber }" />
      </div>
      <h1 class="pt-2 pr-2 text-5xl">{{ props.title }}</h1>
      <hr class="h-full w-[2px] border-none bg-secondary/secondary-opacity">
      <NuxtLink to="/" class="flex items-center justify-center p-2" aria-label="Retour à l'accueil">
        <Icon name="ion:arrow-return-left" size="28px" />
      </NuxtLink>
    </header>

    <slot name="body" />
  </div>
</template>

<style></style>