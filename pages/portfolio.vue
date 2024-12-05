<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Portfolio" :page-number="1">
    <template #body>
      <div class="flex h-full max-h-full flex-col gap-4 overflow-hidden">
        <Tab :items="[
          {
            title: 'Expériences professionnelles',
            activePath: '/portfolio/experience-pro',
            to: '/portfolio/experience-pro'
          },
          {
            title: 'Expériences personnelles',
            activePath: '/portfolio/experience-perso',
            to: '/portfolio/experience-perso'
          },
          {
            title: 'Compétences',
            activePath: '/portfolio/competences',
            to: '/portfolio/competences/languages'
          }
        ]" class="shrink-0" />

        <NuxtPage class="grow overflow-hidden" />
      </div>
    </template>
  </PageLayout>
</template>

<style></style>