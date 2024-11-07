<template>
  <div
    class="flex min-h-screen w-screen max-w-full items-center justify-center px-20 py-4 font-['Borda'] text-lg font-bold text-white backdrop-blur-sm [perspective:800px]">
    <div class="h-10 w-96" />
    <div class="h-[1040px] max-h-[1040px] w-[1850px] max-w-[1850px] border border-neutral-500 [transform:rotateY(-3deg)rotateX(-1deg)]">
      <NuxtPage class="h-full max-h-full w-full max-w-full" />
    </div>
  </div>
</template>

<style lang="scss">
body {
  cursor: url('/cursors/The_Division_1/TD_arrow.cur'), default;
  background: url('/images/wallpapers/TD1.jpg') center/cover no-repeat fixed;
}

.square-pixels-on-extremities {
  @apply relative before:top-0 before:absolute before:left-0 before:h-full before:w-[2px] before:border-y-2 before:border-white before:bg-transparent after:top-0 after:absolute after:right-0 after:h-full after:w-[2px] after:border-y-2 after:border-white after:bg-transparent;
}

/* Style Simplebar */
.simplebar-vertical {
  background: linear-gradient(to left, transparent 45%, rgb(163 163 163) 45% 55%, transparent 55% 100%);

  .simplebar-scrollbar::before {
    @apply bg-white rounded-none !opacity-100 !transition-[left,right];
    inset-inline: 4px;
  }

  .simplebar-scrollbar.simplebar-hover::before {
    @apply bg-amber-600;
    inset-inline: 0px;
  }
}

.simplebar-dragging .simplebar-vertical .simplebar-scrollbar::before {
  @apply bg-amber-600;
  inset-inline: 0px;
}

.simplebar-horizontal {
  background: linear-gradient(to bottom, transparent 45%, rgb(163 163 163) 40% 55%, transparent 55% 100%);

  .simplebar-scrollbar::before {
    @apply bg-white rounded-none !opacity-100 !transition-[top,bottom];
    inset-block: 4px;
  }

  .simplebar-scrollbar.simplebar-hover:before {
    @apply bg-amber-600;
    inset-block: 0px;
  }
}

.simplebar-dragging .simplebar-horizontal .simplebar-scrollbar::before {
  @apply bg-amber-600;
  inset-block: 0px;
}

/* Style page transitions */
.page-enter-active,
.page-leave-active {
  @apply transition-all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  scale: 0.95;
}

/* Style cursor */
button, a, input, textarea, select, summary, [role="button"] {
  cursor: url('/cursors/The_Division_1/TD_link.cur'), pointer;
}
</style>