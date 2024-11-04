<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Contact" :page-number="4">
    <template #body>
      <div class="flex h-full max-h-full items-stretch gap-8 overflow-hidden">
        <aside class="flex shrink-0 basis-1/3 flex-col items-stretch gap-3 px-4">
          <button type="button"
            class="flex w-full flex-col items-stretch gap-1 outline-none transition active:scale-105 [&_#tb]:hover:bg-amber-600 [&_#tb]:focus:bg-amber-600 [&_#tb]:active:bg-amber-600"
            :class="{ 'scale-105 [&_#tb]:!bg-amber-600': $route.path === '/contact/write' }"
            @click="navigateTo('/contact/write')">
            <span id="tb" class="block h-2 bg-transparent transition" />
            <span
              class="square-pixels-on-extremities flex items-center justify-center bg-neutral-300/20 p-3 backdrop-blur-md">
              <h2 class="text-3xl">Envoyez-moi un message !</h2>
            </span>
          </button>
          <button type="button"
            class="flex w-full flex-col items-stretch gap-1 outline-none transition active:scale-105 [&_#tb]:hover:bg-amber-600 [&_#tb]:focus:bg-amber-600 [&_#tb]:active:bg-amber-600"
            :class="{ 'scale-105 [&_#tb]:!bg-amber-600': $route.path === '/contact/rdv' }"
            @click="navigateTo('/contact/rdv')">
            <span id="tb" class="block h-2 bg-transparent transition" />
            <span
              class="square-pixels-on-extremities flex items-center justify-center bg-neutral-300/20 p-3 backdrop-blur-md">
              <h2 class="text-3xl">Planifions un rendez-vous</h2>
            </span>
          </button>
        </aside>
        <NuxtPage class="basis-2/3" />
      </div>
    </template>
  </PageLayout>
</template>

<style></style>