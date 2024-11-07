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
      <li v-for="(item, i) in items" :key="i"
        class="flex flex-col items-stretch gap-1 [&>span]:hover:bg-focus active:[transform:scale(0.9)] transition [&_button]:active:bg-focus/focus-opacity">
        <span class="block h-2 transition bg-transparent"
          :class="{ '!bg-focus': $route.path.startsWith(item.activePath) }" />
        <button type="button" @click="navigateTo(item.to)"
          class="flex flex-col items-stretch w-56 h-64 outline-none square-pixels-on-extremities bg-primary/primary-opacity backdrop-blur-md">
          <div class="flex items-center justify-center basis-2/3">
            <slot :name="`tab-${i}`" />
          </div>
          <span class="flex items-center justify-center shrink-0 basis-1/3">
            <span class="text-xl">{{ item.title }}</span>
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style></style>