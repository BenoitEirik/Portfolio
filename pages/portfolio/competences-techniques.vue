<script lang="ts" setup>

</script>

<template>
  <main class="flex flex-col items-stretch gap-4">
    <HeightTab :items="[
      {
        title: 'Langages',
        activePath: '/portfolio/competences-techniques/languages',
        to: '/portfolio/competences-techniques/languages'
      },
      {
        title: 'Frameworks',
        activePath: '/portfolio/competences-techniques/frameworks',
        to: '/portfolio/competences-techniques/frameworks'
      },
      {
        title: 'Bases de données',
        activePath: '/portfolio/competences-techniques/bases-de-donnees',
        to: '/portfolio/competences-techniques/bases-de-donnees'
      },
      {
        title: 'DevOps',
        activePath: '/portfolio/competences-techniques/devops',
        to: '/portfolio/competences-techniques/devops'
      }
    ]" class="shrink-0">
      <template #tab-0>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:typescript" size="48px" />
          <Icon name="simple-icons:python" size="48px" />
          <Icon name="cib:java" size="48px" />
          <Icon name="simple-icons:php" size="48px" />
        </div>
      </template>
      <template #tab-1>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:nuxtdotjs" size="48px" />
          <Icon name="simple-icons:react" size="48px" />
          <Icon name="simple-icons:nodedotjs" size="48px" />
          <Icon name="simple-icons:capacitor" size="48px" />
        </div>
      </template>
      <template #tab-2>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:postgresql" size="48px" />
          <Icon name="simple-icons:sqlite" size="48px" />
          <Icon name="simple-icons:mongodb" size="48px" />
          <Icon name="devicon-plain:redis" size="48px" />
        </div>
      </template>
      <template #tab-3>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
          <Icon name="simple-icons:github" size="48px" />
          <Icon name="simple-icons:jenkins" size="48px" />
          <Icon name="simple-icons:docker" size="48px" />
          <Icon name="simple-icons:prometheus" size="48px" />
        </div>
      </template>
    </HeightTab>

    <NuxtPage class="grow overflow-hidden" />
  </main>
</template>

<style></style>