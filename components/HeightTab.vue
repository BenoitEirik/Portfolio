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
  <nav class="overflow-hidden">
    <ul class="flex items-stretch gap-4 pb-5">
      <li v-for="(item, i) in props.items" :key="i"
        class="group flex flex-col items-stretch gap-1 transition active:[transform:scale(0.9)]">
        <span :class="[
          'h-2 bg-transparent transition',
          'group-hover:bg-focus',
          { 'bg-focus': $route.path.startsWith(item.activePath) }
        ]" />
        <NuxtLink :to="item.to"
          class="square-pixels-on-extremities flex h-64 w-52 flex-col items-center bg-primary/primary-opacity outline-none backdrop-blur-md group-active:bg-focus/focus-opacity">
          <div class="flex basis-2/3 items-center justify-center">
            <slot :name="`tab-${i}`" />
          </div>
          <span class="flex shrink-0 basis-1/3 items-center justify-center">
            <span class="line-clamp-2 text-center text-2xl font-bold">{{ item.title }}</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style></style>