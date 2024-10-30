<template>
  <div
    class="flex min-h-screen w-screen max-w-full items-center justify-between bg-gray-900 px-20 py-4 font-[Borda] text-lg font-bold text-white [background:_url(/images/wallpapers/Division-2-rues.jpg)_center/cover] [perspective:800px]">
    <div class="h-10 w-10"></div>
    <NuxtPage
      class="h-[1040px] max-h-[1040px] w-[1880px] max-w-[1880px] border border-neutral-500 backdrop-blur-md [transform:rotateY(-3deg)]" />
  </div>
</template>

<style lang="scss">
body {
  cursor: url('/public/cursors/The_Division_1/TD_arrow.cur'), default;
}

.square-pixels-on-extremities {
  @apply
    relative
    before:top-0 before:absolute before:left-0 before:h-full before:w-[2px] before:border-y-2 before:border-white before:bg-transparent
    after:top-0 after:absolute after:right-0 after:h-full after:w-[2px] after:border-y-2 after:border-white after:bg-transparent
  ;
}
</style>