<script lang="ts" setup>
useHead({
  title: 'Bases de données'
})
</script>

<template>
  <SkillsLayout :items="[
    {
      title: 'PostgreSQL',
      level: 3
    },
    {
      title: 'MongoDB',
      level: 2
    },
    {
      title: 'MySQL',
      level: 3
    },
    {
      title: 'SQLite',
      level: 3
    },
    {
      title: 'Redis',
      level: 2
    }
  ]" />
</template>

<style>

</style>