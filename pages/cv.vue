<script lang="ts" setup>
useHead({
  title: 'CV'
})

function download(url: string, name?: string) {
  const link = document.createElement('a')
  link.href = url
  link.download = name || url
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <PageLayout title="CV" :page-number="3">
    <template #body>
      <div class="flex overflow-hidden gap-8 items-stretch h-full max-h-full">
        <aside class="flex flex-col items-stretch basis-1/3">
          <Button iconName="ion:md-download" icon-side="right" text="Télécharger mon CV"
            @click="download('/cv/CV_2024-11-04_Olaf-Marie_Sergent.pdf', 'CV_Olaf-Marie_Sergent')" />
        </aside>
        <main class="basis-2/3">
          <ClientOnly>
            <PdfObject url="/cv/CV_2024-11-04_Olaf-Marie_Sergent.pdf" class="w-full h-full" />
          </ClientOnly>
        </main>
      </div>
    </template>
  </PageLayout>
</template>

<style></style>