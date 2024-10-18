<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col justify-stretch">
    <header class="shrink-0">
      Portfolio
    </header>
    <div class="grow min-h-0 grid grid-cols-3 gap-4 outline-4 outline-dashed outline-green-800">
      <nav class="min-h-0 col-span-2 grid grid-rows-2 grid-cols-2 gap-8 h-full outline-4 outline-dashed outline-red-800">
        <MenuItem title="Portfolio" to="/portfolio" />
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