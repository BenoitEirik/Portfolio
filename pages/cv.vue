<script lang="ts" setup>
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
      <div class="flex h-full max-h-full items-stretch gap-8 overflow-hidden">
        <aside class="flex basis-1/3 flex-col items-stretch">
          <Button iconName="ion:md-download" icon-side="right" text="Télécharger mon CV"
            @click="download('/cv/CV_2024-11-04_Olaf-Marie_Sergent.pdf', 'CV_Olaf-Marie_Sergent')" />
        </aside>
        <main class="basis-2/3">
          <ClientOnly>
            <PdfObject url="/cv/CV_2024-11-04_Olaf-Marie_Sergent.pdf" class="h-full w-full" />
          </ClientOnly>
        </main>
      </div>
    </template>
  </PageLayout>
</template>

<style></style>