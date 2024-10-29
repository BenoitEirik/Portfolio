<script lang="ts" setup>
const props = defineProps<{
  type: string,
  iconName?: string,
  placeholder?: string
}>()
</script>

<template>
  <div class="flex bg-neutral-600/50 backdrop-blur-md transition active:bg-amber-600/50 active:[transform:scale(0.975)]">
    <input :type="props.type"
      class="h-12 grow border-b-4 border-neutral-300/20 bg-transparent px-3 outline-none transition focus:border-b-amber-600 [&+button]:focus:border-b-amber-600" :placeholder="props.placeholder">
    <button
      class="outline-none active:border-b-amber-600 relative flex shrink-0 items-center justify-items-center border-b-4 border-neutral-300/20 px-3 [&>span]:hover:scale-110 transition before:absolute before:left-0 before:h-[calc(100%-15px)] before:w-[1px] before:bg-neutral-300/20">
      <Icon v-if="props.iconName" :name="props.iconName" style="color: white" size="24px" />
    </button>
  </div>
</template>

<style></style>