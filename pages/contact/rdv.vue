<script lang="ts" setup>
useHead({
  title: 'Prendre rendez-vous'
})

onMounted(() => {
  // Cal embed script
  const script = document.createElement('script')
  script.src = '/embed/cal-embed.js'
  script.type = 'text/javascript'
  script.async = true
  document.body.appendChild(script)
});
</script>

<template>
  <main class="max-h-full">
    <div class="h-full max-h-full w-full max-w-full overflow-y-auto overflow-x-hidden" id="my-cal-inline" />
  </main>
</template>

<style></style>