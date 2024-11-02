<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col justify-stretch gap-4 p-8">
    <header class="flex shrink-0 items-center justify-start gap-4">
      <Icon name="cbi:target" size="42px" class="!text-amber-600" />
      <h1 class="pt-2 text-5xl">Olaf-Marie SERGENT</h1>
    </header>
    <div class="grid min-h-0 grow grid-cols-3 gap-4">
      <section class="col-span-1 flex flex-col items-stretch gap-4">
        <h2 class="text-3xl">À la découverte de mes projets et de ma passion pour l'informatique</h2>
        <hr class="h-[1px] border-none bg-neutral-400">
        <div>
          <div class="square-pixels-on-extremities mx-auto w-44">
            <img src="/images/1703805470102.jpg" alt="Avatar" class="border-y border-y-neutral-400 object-cover">
          </div>
        </div>
        <p>
          Bonjour ! Je suis Olaf-Marie Sergent, ingénieur en informatique avec 3 ans d'expérience en freelance dans le
          développement
          d'applications et de sites web, pour des entreprises et associations de divers secteurs. Diplômé d'une école d'ingénieur en informatique, l'ESIEA, je maîtrise de nombreux outils et frameworks tels que Vue.js, Nuxt.js et
          Tailwind CSS. Passionné par le développement, j’accorde une grande importance à l'optimisation de l'expérience
          utilisateur et à la satisfaction client.
        </p>
        <p>
          Au fil de mes expériences, notamment en freelance, et en stage chez Akelio et Bimedia, j’ai conduit des projets variés, allant de la création de sites e-commerce à la modernisation de plateformes
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
          idées de mes clients en outils de valeur. Vous pouvez découvrir mon travail sur ce site
          que je vous laisse découvrir. Bonne visite !
        </p>
      </section>
      <nav class="col-span-2 grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-8">
        <MenuItem title="Portfolio" to="/portfolio/projets">
        <template #picture>
          <Icon name="fluent-mdl2:folder" size="120px" />
        </template>
        </MenuItem>
        <MenuItem title="Blog" to="/blog/list-articles">
        <template #picture>
          <Icon name="fluent-mdl2:blog" size="120px" />
        </template>
        </MenuItem>
        <MenuItem title="CV" to="/cv">
        <template #picture>
          <Icon name="fluent-mdl2:text-document-shared" size="120px" />
        </template>
        </MenuItem>
        <MenuItem title="Contact" to="/contact">
        <template #picture>
          <Icon name="fluent-mdl2:connect-contacts" size="120px" />
        </template>
        </MenuItem>
      </nav>
    </div>
    <footer class="flex shrink-0 gap-4">
      <span>© {{ new Date().getFullYear() }} Portfolio - Olaf-Marie Sergent</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>