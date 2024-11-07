<script lang="ts" setup>

</script>

<template>
  <PageLayout title="Contact" :page-number="4">
    <template #body>
      <div class="flex items-stretch h-full max-h-full gap-8 overflow-hidden">
        <aside class="flex flex-col items-stretch gap-3 px-4 shrink-0 basis-1/3">
          <button type="button"
            class="flex w-full flex-col items-stretch gap-1 outline-none transition active:scale-105 [&_#tb]:hover:bg-focus [&_#tb]:focus:bg-focus [&_#tb]:active:bg-focus"
            :class="{ 'scale-105 [&_#tb]:!bg-focus': $route.path === '/contact/write' }"
            @click="navigateTo('/contact/write')">
            <span id="tb" class="block h-2 transition bg-transparent" />
            <span
              class="flex items-center justify-center p-3 square-pixels-on-extremities bg-secondary/secondary-opacity backdrop-blur-md">
              <h2 class="text-3xl">Envoyez-moi un message !</h2>
            </span>
          </button>
          <button type="button"
            class="flex w-full flex-col items-stretch gap-1 outline-none transition active:scale-105 [&_#tb]:hover:bg-focus [&_#tb]:focus:bg-focus [&_#tb]:active:bg-focus"
            :class="{ 'scale-105 [&_#tb]:!bg-focus': $route.path === '/contact/rdv' }"
            @click="navigateTo('/contact/rdv')">
            <span id="tb" class="block h-2 transition bg-transparent" />
            <span
              class="flex items-center justify-center p-3 square-pixels-on-extremities bg-secondary/secondary-opacity backdrop-blur-md">
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