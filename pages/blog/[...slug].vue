<script lang="ts" setup>

</script>

<template>
  <main class="flex flex-col items-stretch gap-4">
    <ContentDoc v-slot="{ doc }">
      <h2 class="text-3xl">{{ doc.title }}</h2>
      <hr class="h-[1px] border-none bg-neutral-400">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>

<style lang="scss"></style>