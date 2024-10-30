<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col justify-stretch gap-4 p-8">
    <header class="flex shrink-0 items-center justify-start gap-4">
      <Icon name="cbi:target" size="42px" class="!text-amber-600" />
      <h1 class="pt-2 text-5xl">Portfolio</h1>
    </header>
    <div class="grid min-h-0 grow grid-cols-3 gap-4">
      <nav class="col-span-2 grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-8">
        <MenuItem title="Portfolio" to="/portfolio/projets">
        <template #picture>
          <Icon name="pepicons-print:folder" size="200px" />
        </template>
        </MenuItem>
        <MenuItem title="Blog" to="/blog/list-articles">
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
      <section class="col-span-1 flex flex-col items-stretch gap-4">
        <h2 class="text-4xl">Bienvenue sur mon site personnel !</h2>
        <hr class="h-[1px] border-none bg-neutral-400">
        <div>
          <div class="square-pixels-on-extremities mx-auto w-60">
            <img src="/images/1703805470102.jpg" alt="Avatar" class="border-y border-y-neutral-400 object-cover">
          </div>
        </div>
        <p>
          Bonjour ! Je suis Olaf-Marie Sergent, développeur full stack avec 3 ans d'expérience en freelance dans le développement
          d'applications et de sites web, pour des entreprises et associations de divers secteurs. Diplômé en sciences
          informatiques de l'ESIEA, je maîtrise de nombreux outils et frameworks tels que Vue.js, Nuxt.js, Node.js, et
          Tailwind CSS. Passionné par le développement, j’accorde une grande importance à l'optimisation de l'expérience
          utilisateur et à la satisfaction client.
        </p>
        <p>
          Au fil de mes expériences, notamment en freelance, et en stage chez Akelio et Bimedia, j’ai conduit et
          participer à des projets variés, allant de la création de sites e-commerce à la modernisation de plateformes
          SaaS,
          en passant par la
          conception de systèmes d’authentification renforcés. Ces expériences m'ont permis d'acquérir une solide
          expertise
          technique et d’affiner mes compétences en relation client et en gestion de projets, avec une forte capacité
          d’adaptation à des technologies variées.
        </p>
        <p>
          Curieux et minutieux, j’aime concevoir des solutions sur mesure et relever des défis techniques pour
          transformer les
          idées de mes clients en outils performants et innovants. Vous pouvez découvrir mon travail sur mon site
          professionnel.
        </p>
        <p>Bonne visite !</p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>