<script lang="ts" setup>
interface Props {
  iconName?: string
  text?: string
  iconSide?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  iconSide: 'left'
})

defineEmits<{
  click: []
}>()
</script>

<template>
  <button type="button" @click="$emit('click')" v-bind="!props.text && props.iconName ? { 'aria-label': props.iconName } : {}"
    class="square-pixels-on-extremities bg-animation flex min-w-0 items-center gap-2 bg-primary/primary-opacity px-2 py-1 outline-none backdrop-blur-md hover:bg-secondary/secondary-opacity focus:bg-secondary/secondary-opacity [&_span]:hover:scale-105 [&_span]:focus:scale-105">
    <template v-if="props.iconName">
      <Icon v-if="props.iconSide === 'left'" :name="props.iconName" size="32px" class="text-focus transition" />
      <span v-if="props.text" class="line-clamp-2 grow px-2 pt-1 text-3xl transition">{{ props.text }}</span>
      <Icon v-if="props.iconSide === 'right'" :name="props.iconName" size="32px" class="text-focus transition" />
    </template>
    <span v-else-if="props.text" class="line-clamp-2 grow px-2 pt-1 text-3xl transition">{{ props.text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.bg-animation:active {
  animation: flash 0.25s ease forwards;
}

@keyframes flash {
  0% {
    @apply bg-focus/focus-opacity;
  }

  100% {
    @apply bg-primary/primary-opacity;
  }
}
</style>