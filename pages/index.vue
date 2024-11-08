<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col gap-8 p-8 justify-stretch">
    <header class="flex items-center justify-start gap-4 shrink-0">
      <Icon name="cbi:target" size="42px" class="!text-focus" />
      <h1 class="pt-2 text-5xl">Olaf-Marie SERGENT</h1>
    </header>
    <div class="grid max-h-full grid-cols-5 gap-12 overflow-hidden grow">
      <section class="max-h-full col-span-2 overflow-hidden">
        <div class="flex flex-col items-stretch gap-4">
          <h2 class="text-3xl">
            Freelance développeur web - Formateur
            Créateur de sites et d’applications web
            🎓 Diplômé d’école d’ingénieur française
          </h2>
          <hr class="h-[2px] border-none bg-secondary/secondary-opacity">
          <div>
            <div class="mx-auto square-pixels-on-extremities w-44">
              <img src="/images/1703805470102.jpg" alt="Avatar"
                class="object-cover border-y-2 border-y-secondary/secondary-opacity">
            </div>
          </div>
          <p class="text-justify">
            Bonjour ! Je suis Olaf-Marie Sergent, ingénieur en informatique avec 3 ans d'expérience en freelance dans
            le
            développement
            d'applications et de sites web, pour des entreprises et associations de divers secteurs. Diplômé de l'ESIEA,
            une
            école
            d'ingénieur en informatique, je maîtrise de nombreux outils et frameworks tels que Vue.js,
            Nuxt.js et
            Tailwind CSS. Passionné par le développement, j’accorde une grande importance à l'optimisation de
            l'expérience
            utilisateur et à la satisfaction du client.
          </p>
          <p class="text-justify">
            Au fil de mes expériences, notamment en freelance, et en stage chez Akelio et Bimedia, j’ai conduit des
            projets variés, allant de la création de sites e-commerce à la modernisation de plateformes
            SaaS,
            en passant par la
            conception de systèmes d’authentification renforcés. Ces expériences m'ont permis d'acquérir une solide
            expertise
            technique et d’affiner mes compétences en relation client et en gestion de projets, avec une forte
            capacité
            d’adaptation à des technologies variées.
          </p>
          <p class="text-justify">
            Curieux et minutieux, j’aime concevoir des solutions adaptées à mes clients et relever des défis techniques
            pour
            transformer les
            idées de mes clients en outils de valeur. Vous pouvez découvrir mon travail sur ce site
            que je vous laisse découvrir. Bonne visite !
          </p>
        </div>
      </section>
      <div class="flex flex-col col-span-3 gap-8">
        <section class="flex flex-col items-stretch gap-4 grow">
          <h2 class="text-3xl font-bold">Navigation</h2>
          <nav class="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-8 grow">
            <MenuItem title="Portfolio" to="/portfolio/experience-pro">
            <template #picture>
              <Icon name="fluent-mdl2:work" size="80px" />
            </template>
            </MenuItem>
            <MenuItem title="Blog" to="/blog/list-articles">
            <template #picture>
              <Icon name="fluent-mdl2:blog" size="80px" />
            </template>
            </MenuItem>
            <MenuItem title="CV" to="/cv">
            <template #picture>
              <Icon name="fluent-mdl2:text-document-shared" size="80px" />
            </template>
            </MenuItem>
            <MenuItem title="Contact" to="/contact/write">
            <template #picture>
              <Icon name="fluent-mdl2:connect-contacts" size="80px" />
            </template>
            </MenuItem>
          </nav>
        </section>
        <section class="flex flex-col gap-4 overflow-hidden shrink-0">
          <h2 class="text-3xl font-bold">Avis clients</h2>
          <simplebar data-simplebar-auto-hide="false" class="w-full max-w-full pb-6">
            <div class="flex gap-4">
              <article v-for="i in 10"
                class="flex flex-col square-pixels-on-extremities min-w-96 border-y-2 border-y-secondary/secondary-opacity bg-primary/primary-opacity">
                <span class="flex items-end justify-between gap-4 px-4 py-3">
                  <h3 class="text-2xl font-bold shrink-0">Blandine</h3>
                  <p class="shrink-0 text-secondary">Association FDHN</p>
                </span>
                <hr class="h-[1px] border-none bg-secondary/secondary-opacity">
                <div class="px-4 py-3">
                  <p class="overflow-hidden line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                    quae.
                  </p>
                </div>
              </article>
            </div>
          </simplebar>
        </section>
      </div>
    </div>
    <footer class="flex gap-4 shrink-0">
      <span>© {{ new Date().getFullYear() }} Portfolio - Olaf-Marie Sergent</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>