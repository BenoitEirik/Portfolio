<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Blog" :page-number="2">
    <template #body>
      <div class="flex h-full items-stretch justify-stretch gap-8">
        <div class="flex w-[500px] shrink-0 flex-col gap-4">
          <section class="flex flex-col gap-4">
            <h2 class="text-3xl">Recherche</h2>
            <span class="flex">
              <input type="text" class="h-10 grow border-b-4 border-neutral-300/20 bg-neutral-600/50 px-3 outline-none focus:border-b-amber-600 [&+button]:focus:border-b-amber-600">
              <button class="flex shrink-0 items-center justify-items-center border-b-4 border-l border-neutral-300/20 bg-neutral-600/50 px-3">
                <Icon name="lsicon:search-outline" style="color: white" size="24px" />
              </button>
            </span>
          </section>
          <section><h2 class="text-3xl">Tags</h2></section>
          <section><h2 class="text-3xl">Abonnement</h2></section>
        </div>
        <section class="grow">
          <h2 class="text-3xl">Articles</h2>
        </section>
      </div>
    </template>
  </PageLayout>
</template>

<style></style>