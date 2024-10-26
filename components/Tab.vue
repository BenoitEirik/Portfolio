<script lang="ts" setup>
interface Item {
  title: string,
  fullPath: string
}

const props = defineProps<{
  items: Item[]
}>()
</script>

<template>
  <nav>
    <li class="flex items-center justify-start gap-4 font-bold">
      <ul
        v-for="(item,i) in props.items" :key="i"
        class="flex flex-col items-stretch gap-1 [&>span]:hover:bg-amber-600 active:[transform:scale(0.9)] transition [&_button]:active:bg-amber-600/50">
        <span class="block h-2 bg-transparent transition"
          :class="{ 'bg-amber-600': $route.path === item.fullPath }" />
        <button @click="navigateTo(item.fullPath)"
          class="w-64 bg-neutral-600/50 p-1 text-xl [&>p]:hover:[transform:translateZ(4rem)] [perspective:800px]">
          <p class="transition">{{ item.title }}</p>
        </button>
      </ul>
    </li>
  </nav>
</template>

<style></style>