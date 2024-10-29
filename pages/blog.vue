<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Blog" :page-number="2">
    <template #body>
      <div class="flex h-full items-stretch justify-stretch gap-8">
        <div class="w-[500px] shrink-0">
          <section>champ de recherche</section>
          <section>tags</section>
          <section>champ abonnement</section>
        </div>
        <section class="grow">
          articles
        </section>
      </div>
    </template>
  </PageLayout>
</template>

<style></style>