<script lang="ts" setup>
useHead({
  title: 'DevOps'
})
</script>

<template>
  <SkillsLayout :items="[
    {
      title: 'Git',
      level: 4
    },
    {
      title: 'Jenkins',
      level: 3
    },
    {
      title: 'Docker',
      level: 3
    },
    {
      title: 'Ansible',
      level: 1
    }
  ]" />
</template>

<style></style>