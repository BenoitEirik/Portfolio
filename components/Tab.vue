<script lang="ts" setup>
interface Item {
  title: string,
  activePath: string,
  to: string
}

const props = defineProps<{
  items: Item[]
}>()
</script>

<template>
  <nav>
    <ul class="flex items-center justify-start gap-4 font-bold">
      <li v-for="(item, i) in props.items" :key="i"
        class="group flex flex-col items-stretch gap-1 transition active:[transform:scale(0.9)]">
        <span :class="[
          'h-2 bg-transparent transition',
          'group-hover:bg-focus',
          { 'bg-focus': $route.path.startsWith(item.activePath) }
        ]" />
        <NuxtLink :to="item.to"
          class="min-w-64 bg-secondary/secondary-opacity px-8 py-1 [&>p]:hover:[transform:translateZ(4rem)] [perspective:800px] line-clamp-1 backdrop-blur-primary group-active:bg-focus/focus-opacity">
          <p class="line-clamp-1 text-center text-2xl transition">{{ item.title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style></style>