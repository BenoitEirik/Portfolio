<script lang="ts" setup>
const props = defineProps<{
  type: string,
  iconName?: string,
  placeholder?: string
}>()

const input = ref<Event>()

const emit = defineEmits(['input'])

function update() {
  emit('input', input.value)
}

const model = defineModel()
</script>

<template>
  <div class="flex bg-primary/primary-opacity backdrop-blur-md transition active:scale-95 active:bg-focus/focus-opacity"
    @keyup.enter="update">
    <input :type="props.type" @input="e => input = e" v-model="model"
      class="h-12 grow border-b-4 border-secondary/secondary-opacity bg-transparent px-3 outline-none transition focus:border-b-focus [&+button]:focus:border-b-focus"
      :placeholder="props.placeholder">
    <button @click="update" :class="{ 'hidden': iconName === undefined }" v-bind="props.iconName ? { 'aria-label': props.iconName } : {}"
      class="outline-none active:border-b-focus relative flex shrink-0 items-center justify-items-center border-b-4 border-secondary/secondary-opacity px-3 [&>span]:hover:scale-110 transition before:absolute before:left-0 before:h-[calc(100%-15px)] before:w-[1px] before:bg-secondary/secondary-opacity">
      <Icon v-if="props.iconName" :name="props.iconName" style="color: white" size="24px" />
    </button>
  </div>
</template>

<style></style>