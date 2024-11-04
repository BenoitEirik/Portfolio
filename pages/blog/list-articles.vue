<script lang="ts" setup>

</script>

<template>
  <section class="flex flex-col items-stretch gap-4 overflow-hidden">
    <h2 class="text-3xl">Articles</h2>
    <hr class="h-[1px] border-none bg-neutral-400">
    <ContentList path="blog" v-slot="{ list }">
      <div class="grow overflow-hidden">
        <simplebar data-simplebar-auto-hide="false" class="h-full pr-4">
          <template v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path"
              class="bg-hover-animation flex flex-col gap-1 outline-none transition active:scale-95 [&_#tb]:hover:bg-amber-600 [&_#tb]:focus:bg-amber-600">
              <span id="tb" class="block h-2 bg-transparent transition" />
              <article class="square-pixels-on-extremities flex gap-4 bg-neutral-600/50 backdrop-blur-md"
                style="cursor: url('/cursors/The_Division_1/TD_link.cur'), pointer;">
                <img src="/images/wallpapers/pexels-digitech-1438761.webp" class="cover aspect-video h-52 shrink-0">
                <div class="flex grow flex-col gap-2 py-2">
                  <h3 class="line-clamp-2 text-2xl transition">{{ article.title }}</h3>
                  <p class="line-clamp-3">
                    {{ article.description }}
                  </p>
                  <span class="font-normal text-neutral-300">
                    Publié le 15 septembre 2015
                  </span>
                </div>
              </article>
            </NuxtLink>
          </template>
        </simplebar>
      </div>
    </ContentList>
  </section>
</template>

<style lang="scss" scoped>
.bg-hover-animation {
  transition: background-color 0.2s ease;
}

.bg-hover-animation:hover {
  animation: flash 0.25s linear forwards;
}

@keyframes flash {
  0% {
    @apply bg-amber-600;
  }

  100% {
    background-color: bg-transparent;
  }
}
</style>