<script lang="ts" setup>
const props = defineProps<{
  iconName?: string,
  text?: string,
  iconSide?: 'left' | 'right',
}>()

const emit = defineEmits(['click'])

function submit() {
  emit('click')
}
</script>

<template>
  <button type="button" @click="submit"
    class="square-pixels-on-extremities bg-animation flex min-w-0 items-center gap-2 bg-neutral-600/50 px-3 py-2 outline-none backdrop-blur-md hover:bg-neutral-300/20 focus:bg-neutral-300/20 [&_span]:hover:scale-105 [&_span]:focus:scale-105">
    <Icon v-if="props.iconName" :name="props.iconName" size="32px" class="text-amber-600 transition" />
    <span class="line-clamp-2 grow pt-1 text-3xl transition" :class="{ 'hidden': !props.text }">{{ props.text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.bg-animation:active {
  animation: flash 0.25s ease forwards;
}

@keyframes flash {
  0% {
    @apply bg-amber-600/50;
  }

  100% {
    @apply bg-neutral-600/50;
  }
}
</style>