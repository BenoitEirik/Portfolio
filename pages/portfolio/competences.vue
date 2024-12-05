<script lang="ts" setup>
useHead({
  title: 'Compétences'
})
</script>

<template>
  <main class="flex flex-col gap-4 items-stretch">
    <HeightTab :items="[
      {
        title: 'Soft skills',
        activePath: '/portfolio/competences/soft-skills',
        to: '/portfolio/competences/soft-skills'
      },
      {
        title: 'Langages',
        activePath: '/portfolio/competences/languages',
        to: '/portfolio/competences/languages'
      },
      {
        title: 'Frameworks',
        activePath: '/portfolio/competences/frameworks',
        to: '/portfolio/competences/frameworks'
      },
      {
        title: 'Bases de données',
        activePath: '/portfolio/competences/bases-de-donnees',
        to: '/portfolio/competences/bases-de-donnees'
      },
      {
        title: 'DevOps',
        activePath: '/portfolio/competences/devops',
        to: '/portfolio/competences/devops'
      },
      {
        title: 'Méthodologies et bonnes pratiques',
        activePath: '/portfolio/competences/methodologies-et-bonnes-pratiques',
        to: '/portfolio/competences/methodologies-et-bonnes-pratiques'
      }
    ]" class="shrink-0">
      <template #tab-0>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="mdi:head-cog" size="48px" />
          <Icon name="mdi:handshake" size="48px" />
          <Icon name="mdi:account-group" size="48px" />
          <Icon name="mdi:lightbulb-on" size="48px" />
        </div>
      </template>
      <template #tab-1>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:typescript" size="48px" />
          <Icon name="simple-icons:python" size="48px" />
          <Icon name="cib:java" size="48px" />
          <Icon name="simple-icons:php" size="48px" />
        </div>
      </template>
      <template #tab-2>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:nuxtdotjs" size="48px" />
          <Icon name="simple-icons:react" size="48px" />
          <Icon name="simple-icons:nodedotjs" size="48px" />
          <Icon name="simple-icons:capacitor" size="48px" />
        </div>
      </template>
      <template #tab-3>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:postgresql" size="48px" />
          <Icon name="simple-icons:sqlite" size="48px" />
          <Icon name="simple-icons:mongodb" size="48px" />
          <Icon name="devicon-plain:redis" size="48px" />
        </div>
      </template>
      <template #tab-4>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:github" size="48px" />
          <Icon name="simple-icons:jenkins" size="48px" />
          <Icon name="simple-icons:docker" size="48px" />
          <Icon name="simple-icons:prometheus" size="48px" />
        </div>
      </template>
      <template #tab-5>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <span class="flex size-[48px] items-center justify-center text-[20px] font-extrabold">Scrum</span>
          <Icon name="carbon:test-tool" size="48px" />
          <Icon name="carbon:code" size="48px" />
          <Icon name="carbon:data-structured" size="48px" />
        </div>
      </template>
    </HeightTab>

    <NuxtPage class="overflow-hidden grow" />
  </main>
</template>

<style></style>