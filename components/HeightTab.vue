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
        class="flex flex-col items-stretch gap-1 [&>span]:hover:bg-focus active:[transform:scale(0.9)] transition [&_button]:active:bg-focus/focus-opacity">
        <span class="block h-2 bg-transparent transition"
          :class="{ '!bg-focus': $route.path.startsWith(item.activePath) }" />
        <button type="button" @click="navigateTo(item.to)"
          class="square-pixels-on-extremities line-clamp-1 flex h-64 w-52 flex-col items-center bg-primary/primary-opacity outline-none backdrop-blur-md">
          <div class="flex basis-2/3 items-center justify-center">
            <slot :name="`tab-${i}`" />
          </div>
          <span class="flex shrink-0 basis-1/3 items-center justify-center">
            <span class="text-2xl font-bold">{{ item.title }}</span>
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style></style>