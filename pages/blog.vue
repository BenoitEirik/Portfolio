<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Blog" :page-number="2">
    <template #body>
      <div class="flex h-full items-stretch justify-stretch gap-8">
        <div class="flex w-[500px] shrink-0 flex-col gap-4">
          <section class="flex flex-col gap-4">
            <h2 class="text-3xl">Recherche</h2>
            <Input type="text" icon-name="ion:search-outline" />
          </section>
          <section class="grow">
            <h2 class="text-3xl">Tags</h2>
            <div>

            </div>
          </section>
          <section class="flex flex-col gap-4">
            <h2 class="text-3xl">Abonnement</h2>
            <Input type="text" icon-name="ion:ios-send" placeholder="Entrer votre courriel" />
          </section>
        </div>
        <section class="grow">
          <h2 class="text-3xl">Articles</h2>
        </section>
      </div>
    </template>
  </PageLayout>
</template>

<style></style>