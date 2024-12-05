<template>
  <div
    class="flex min-h-screen w-screen max-w-full items-center justify-center px-20 py-4 font-['Borda'] text-lg font-semibold text-white [perspective:800px] before:absolute before:h-full before:w-full before:backdrop-blur-sm">
    <div class="w-96 h-10" />
    <div id="root-page"
      class="h-[1040px] max-h-[1040px] w-[1850px] max-w-[1850px] [transform:rotateY(-3deg)rotateX(-1deg)]">
      <NuxtPage class="w-full max-w-full h-full max-h-full" />
    </div>
  </div>
</template>

<style lang="scss">
body {
  cursor: url('/cursors/The_Division_1/TD_arrow.cur'), default;
  background: url('/images/wallpapers/TD1-small.jpg') center/cover no-repeat fixed;
  transition: background-image 0.5s ease-in-out;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/wallpapers/TD1.jpg') center/cover no-repeat fixed;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &.loaded::before {
    opacity: 1;
  }
}

.square-pixels-on-extremities {
  @apply relative before:top-0 before:absolute before:left-0 before:h-full before:w-[2px] before:border-y-2 before:border-secondary before:bg-transparent after:top-0 after:absolute after:right-0 after:h-full after:w-[2px] after:border-y-2 after:border-secondary after:bg-transparent;
}

/* Style Simplebar */
.simplebar-vertical {
  background: linear-gradient(to left, transparent 45%, rgb(163 163 163) 45% 55%, transparent 55% 100%);

  .simplebar-scrollbar::before {
    @apply bg-white rounded-none !opacity-100;
    inset-inline: 4px;
    // !transition-[left,right] : formatting is broken
    transition: top 150ms cubic-bezier(0.4, 0, 0.2, 1), bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .simplebar-scrollbar.simplebar-hover::before {
    @apply bg-focus;
    inset-inline: 0px;
  }
}

.simplebar-dragging .simplebar-vertical .simplebar-scrollbar::before {
  @apply bg-focus;
  inset-inline: 0px;
}

.simplebar-horizontal {
  background: linear-gradient(to bottom, transparent 45%, rgb(163 163 163) 40% 55%, transparent 55% 100%);

  .simplebar-scrollbar::before {
    @apply bg-white rounded-none !opacity-100;
    inset-block: 4px;
    // !transition-[left,right] : formatting is broken
    transition: top 150ms cubic-bezier(0.4, 0, 0.2, 1), bottom 150ms cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .simplebar-scrollbar.simplebar-hover:before {
    @apply bg-focus;
    inset-block: 0px;
  }
}

.simplebar-dragging .simplebar-horizontal .simplebar-scrollbar::before {
  @apply bg-focus;
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
button,
a,
input,
textarea,
select,
summary,
[role="button"] {
  cursor: url('/cursors/The_Division_1/TD_link.cur'), pointer;
}
</style>

<style lang="scss" scoped>
/* Animate on website entering */
#root-page {
  animation: websiteEntering 1s ease forwards;
}

@keyframes websiteEntering {
  from {
    transform: scale(0) translateX(50%) translateY(-75%);
    opacity: 0;
  }

  to {
    transform: scale(1) translateX(0%) translateY(0%) rotateY(-3deg) rotateX(-1deg);
    opacity: 1;
  }
}
</style>