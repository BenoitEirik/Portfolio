<script lang="ts" setup>

</script>

<template>
  <section class="flex flex-col items-stretch gap-4">
    <h2 class="text-3xl">Articles</h2>
    <hr class="h-[1px] border-none bg-neutral-400">
    <ul class="grid grid-cols-2 gap-4 overflow-y-auto">
      <li v-for="(item, i) in Array(5)" :key="i">
        <NuxtLink to="/" class="outline-none flex flex-col gap-1 [&_#tb]:focus:bg-amber-600 [&_#tb]:hover:bg-amber-600 active:scale-95 transition [&_h3]:hover:[transform:perspective(800px)translateZ(0.95)]">
          <span id="tb" class="block h-2 transition bg-transparent" />
          <article
            class="relative flex gap-4 bg-neutral-600/50 backdrop-blur-md after:absolute after:right-0 after:h-full after:bg-transparent after:w-[2px] after:border-y-2 after:border-white before:absolute before:left-0 before:h-full before:bg-transparent before:w-[2px] before:border-y-2 before:border-white"
            style="cursor: url('/cursors/The_Division_1/TD_link.cur'), pointer;">
            <img src="/images/wallpapers/pexels-digitech-1438761.webp" class="h-44 cover aspect-video shrink-0">
            <div class="flex flex-col gap-2 py-2 grow">
              <h3 class="text-2xl transition">Les pseudo-classes CSS</h3>
              <p class="line-clamp-3">
                Magna veniam veniam nisi pariatur. Ex dolor amet laboris nostrud duis duis sunt pariatur ex. Est
                reprehenderit anim et ullamco. Enim sit occaecat ut eiusmod deserunt tempor occaecat ut incididunt
                officia
                adipisicing. Velit consequat excepteur duis id labore officia ullamco.
              </p>
              <span class="font-normal text-neutral-300">
                Publié le 15 septembre 2015
              </span>
            </div>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style></style>