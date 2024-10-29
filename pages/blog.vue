<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Blog" :page-number="2">
    <template #body>
      <div class="flex h-full items-stretch justify-stretch gap-8">
        <div class="flex w-[500px] shrink-0 flex-col gap-4">
          <section class="flex flex-col gap-4">
            <h2 class="text-3xl">Recherche</h2>
            <div class="flex bg-neutral-600/50 transition active:bg-amber-600/50 active:[transform:scale(0.975)]">
              <input type="text"
                class="h-12 grow border-b-4 border-neutral-300/20 bg-transparent px-3 outline-none transition focus:border-b-amber-600 [&+button]:focus:border-b-amber-600">
              <button
                class="relative flex shrink-0 items-center justify-items-center border-b-4 border-neutral-300/20 px-3 [&>span]:hover:scale-110 transition before:absolute before:left-0 before:h-[calc(100%-15px)] before:w-[1px] before:bg-neutral-300/20">
                <Icon name="ion:search-outline" style="color: white" size="24px" />
              </button>
            </div>
          </section>
          <section>
            <h2 class="text-3xl">Tags</h2>
            <div>

            </div>
          </section>
          <section>
            <h2 class="text-3xl">Abonnement</h2>
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