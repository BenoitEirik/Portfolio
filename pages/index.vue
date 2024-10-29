<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col gap-4 p-8 justify-stretch">
    <header class="flex items-center justify-start gap-4 shrink-0">
      <Icon name="cbi:target" size="42px" class="!text-amber-600" />
      <h1 class="pt-2 text-5xl">Portfolio</h1>
    </header>
    <div class="grid min-h-0 grid-cols-3 gap-4 grow">
      <nav class="grid h-full min-h-0 grid-cols-2 col-span-2 grid-rows-2 gap-8">
        <MenuItem title="Portfolio" to="/portfolio/projets">
          <template #picture>
            <Icon name="pepicons-print:folder" size="200px" />
          </template>
        </MenuItem>
        <MenuItem title="Blog" to="/blog">
          <template #picture>
            <Icon name="pepicons-print:book" size="200px" />
          </template>
        </MenuItem>
        <MenuItem title="CV" to="/cv">
          <template #picture>
            <Icon name="pepicons-print:cv" size="200px" />
          </template>
        </MenuItem>
        <MenuItem title="Contact" to="/contact">
          <template #picture>
            <Icon name="pepicons-print:text-bubble" size="200px" class="[&_span]:transition" />
          </template>
        </MenuItem>
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