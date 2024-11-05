<script lang="ts" setup>

</script>

<template>
  <main class="flex flex-col items-stretch gap-4">
    <ContentDoc v-slot="{ doc }">
      <div class="flex gap-2">
        <button class="flex items-center justify-center px-2" @click="navigateTo('/blog/list-articles')">
          <Icon name="ion:arrow-return-left" size="28px" />
        </button>
        <hr class="h-full w-[2px] border-none bg-neutral-300/20">
        <h2 class="pl-2 pt-2 text-3xl">{{ doc.title }}</h2>
      </div>
      <hr class="h-[1px] border-none bg-neutral-400">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>

<style lang="scss"></style>