<script lang="ts" setup>
const content = await queryContent(useRoute().path).findOne()

useSeoMeta({
  ogImage: content.ogImage.url,
  twitterTitle: content.title,
  twitterDescription: content.description,
  twitterImage: content.twitterImage.url,
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>

<template>
  <main class="flex flex-col items-stretch gap-4">
    <ContentDoc head v-slot="{ doc }">
      <div class="flex gap-2">
        <button class="flex items-center justify-center px-2" @click="navigateTo('/blog/list-articles')">
          <Icon name="ion:arrow-return-left" size="28px" />
        </button>
        <hr class="h-full w-[2px] border-none bg-secondary/secondary-opacity">
        <h2 class="pl-2 pt-2 text-3xl">{{ doc.title }}</h2>
      </div>
      <hr class="h-[2px] border-none bg-secondary/secondary-opacity">
      <Simplebar data-simplebar-auto-hide="false" class="w-full max-w-full overflow-y-auto overflow-x-hidden pr-4">
        <ContentRenderer :value="doc" />
      </Simplebar>
    </ContentDoc>
  </main>
</template>

<style lang="scss"></style>