<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col justify-stretch gap-4 p-8">
    <header class="flex shrink-0 items-center justify-start gap-4">
      <h1 class="text-5xl">Portfolio</h1>
    </header>
    <div class="grid min-h-0 grow grid-cols-3 gap-4">
      <nav class="col-span-2 grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-8">
        <MenuItem title="Portfolio" to="/portfolio/projets" />
        <MenuItem title="Blog" to="/blog" />
        <MenuItem title="CV" to="/cv" />
        <MenuItem title="Contact" to="/contact" />
      </nav>
      <section class="col-span-1">
        <h2 class="text-4xl">Bienvenue sur mon site personnel !</h2>
        <p>
          Nostrud incididunt consequat cillum duis sunt magna laborum. Irure voluptate aute occaecat fugiat nisi anim sunt sit magna eu non do esse deserunt. Fugiat ex in eiusmod minim ipsum duis do. Aliquip nulla consequat est non commodo. Deserunt ex elit irure pariatur excepteur nisi in.
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>