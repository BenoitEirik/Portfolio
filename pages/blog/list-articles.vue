<script lang="ts" setup>

</script>

<template>
  <section class="flex flex-col items-stretch gap-4">
    <h2 class="text-3xl">Articles</h2>
    <hr class="h-[1px] border-none bg-neutral-400">
    <ContentList path="blog" v-slot="{ list }">
      <ul class="grid grid-cols-1 gap-4 overflow-y-auto">
        <li v-for="article in list" :key="article._path">
          <NuxtLink to="/blog/css-selectors"
            class="flex flex-col gap-1 outline-none transition active:scale-95 [&_#tb]:hover:bg-amber-600 [&_#tb]:focus:bg-amber-600">
            <span id="tb" class="block h-2 bg-transparent transition" />
            <article
              class="relative flex gap-4 bg-neutral-600/50 backdrop-blur-md before:absolute before:left-0 before:h-full before:w-[2px] before:border-y-2 before:border-white before:bg-transparent after:absolute after:right-0 after:h-full after:w-[2px] after:border-y-2 after:border-white after:bg-transparent"
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
        </li>
      </ul>
    </ContentList>
  </section>
</template>

<style></style>