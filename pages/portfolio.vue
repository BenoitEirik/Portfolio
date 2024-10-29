<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Portfolio" :page-number="1">
    <template #body>
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
        <NuxtPage />
      </section>
    </template>
  </PageLayout>
</template>

<style></style>