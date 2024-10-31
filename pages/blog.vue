<script lang="ts" setup>
async function search(e: Event) {
  // TODO: fix searchContent not working because of useFetch warning in console
  const results = await searchContent((e.target as HTMLInputElement).value)
  console.log('r:', results.value)
}
</script>

<template>
  <PageLayout title="Blog" :page-number="2">
    <template #body>
      <div class="flex items-stretch h-full max-h-full gap-8 overflow-hidden justify-stretch">
        <aside class="flex w-[500px] shrink-0 flex-col gap-4">
          <section class="flex flex-col gap-4">
            <h2 class="text-3xl">Recherche</h2>
            <Input type="text" icon-name="ion:search-outline" @input="e => search(e)" />
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
        </aside>
        <NuxtPage class="overflow-hidden grow" />
      </div>
    </template>
  </PageLayout>
</template>

<style></style>