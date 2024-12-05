<script lang="ts" setup>
useHead({
  title: 'Articles de blog'
})

</script>

<template>
  <section class="flex overflow-hidden flex-col gap-4 items-stretch">
    <h2 class="text-3xl">Articles</h2>
    <hr class="h-[2px] border-none bg-secondary/secondary-opacity">
    <ContentList path="blog" v-slot="{ list }">
      <div class="overflow-hidden grow">
        <simplebar data-simplebar-auto-hide="false" class="pr-4 h-full">
          <template v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path"
              class="bg-hover-animation flex flex-col gap-1 outline-none transition active:scale-95 [&_#tb]:hover:bg-focus [&_#tb]:focus:bg-focus">
              <span id="tb" class="block h-2 bg-transparent transition" />
              <article class="flex gap-4 backdrop-blur-md square-pixels-on-extremities bg-primary/primary-opacity">
                <img src="/images/wallpapers/pexels-digitech-1438761.webp" class="h-52 cover aspect-video shrink-0">
                <div class="flex flex-col gap-2 py-2 grow">
                  <h3 class="text-2xl transition line-clamp-2">{{ article.title }}</h3>
                  <p class="line-clamp-3">
                    {{ article.description }}
                  </p>
                  <span class="flex items-center font-normal text-neutral-300 grow">
                    <span>Publié le 15 septembre 2015</span>
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
    @apply bg-focus;
  }

  100% {
    background-color: bg-transparent;
  }
}
</style>