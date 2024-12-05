<script lang="ts" setup>
useHead({
  title: 'Accueil'
})
</script>

<template>
  <div class="flex flex-col gap-8 p-8 justify-stretch">
    <header class="flex gap-4 justify-start items-center shrink-0">
      <Icon name="cbi:target" size="42px" class="!text-focus" />
      <h1 class="pt-2 text-5xl">Olaf-Marie SERGENT</h1>
    </header>
    <div class="grid overflow-hidden grid-cols-5 gap-12 max-h-full grow">
      <section class="overflow-hidden col-span-2 max-h-full">
        <div class="flex flex-col gap-4 items-stretch">
          <h2 class="text-3xl">
            Freelance développeur web - Formateur
            Créateur de sites et d’applications web
            🎓 Diplômé d’école d’ingénieur française
          </h2>
          <hr class="h-[2px] border-none bg-secondary/secondary-opacity">
          <div>
            <div class="mx-auto w-44 square-pixels-on-extremities">
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
        <section class="flex flex-col gap-4 items-stretch grow">
          <h2 class="text-3xl font-bold">Navigation</h2>
          <nav class="grid grid-cols-2 grid-rows-2 gap-y-8 gap-x-10 grow">
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
        <section class="flex overflow-hidden flex-col gap-4 shrink-0">
          <h2 class="text-3xl font-bold">Avis clients</h2>
          <simplebar data-simplebar-auto-hide="false" class="pb-6 w-full max-w-full">
            <div class="flex gap-4">
              <article
                class="flex flex-col square-pixels-on-extremities border-y-2 border-y-secondary/secondary-opacity bg-primary/primary-opacity">
                <span class="flex gap-4 justify-between items-end px-4 py-3">
                  <h3 class="text-2xl font-bold shrink-0">Blandine F.</h3>
                  <p class="shrink-0 text-secondary">Association FDHN</p>
                </span>
                <hr class="h-[1px] border-none bg-secondary/secondary-opacity">
                <div class="px-4 py-3">
                  <p class="overflow-hidden line-clamp-3">
                    Développeur très compétent et sachant se mettre au niveau de ses clients (conseils et explications claires). Très réactif également pour résoudre les souci qui auraient pu se présenter. Très bon accompagnement pendant la création de notre site et pour la prise en main ensuite.
                  </p>
                </div>
              </article>
              <article
                class="flex flex-col square-pixels-on-extremities border-y-2 border-y-secondary/secondary-opacity bg-primary/primary-opacity">
                <span class="flex gap-4 justify-between items-end px-4 py-3">
                  <h3 class="text-2xl font-bold shrink-0">Aleth S.</h3>
                  <p class="shrink-0 text-secondary">Apis Gallery</p>
                </span>
                <hr class="h-[1px] border-none bg-secondary/secondary-opacity">
                <div class="px-4 py-3">
                  <p class="overflow-hidden line-clamp-3">
                    Super expérience client! Olaf a été professionnel du début à la fin du projet. A l'écoute et force de proposition, il a su comprendre mon besoin et mes envies, tout en me guidant lors des choix techniques. Réactif, il a su ajuster rapidement les points qui ne convenaient pas lors de l'expérience utilisateur. Je recommande fortement.
                  </p>
                </div>
              </article>
            </div>
          </simplebar>
        </section>
      </div>
    </div>
    <footer class="flex gap-4 justify-between shrink-0">
      <div class="flex gap-4">
        <Button iconName="ion:logo-github" text="GitHub" @click="openURL('https://github.com/BenoitEirik')" />
        <Button iconName="ion:logo-linkedin" text="LinkedIn"
          @click="openURL('https://www.linkedin.com/in/olaf-marie-sergent-77a2a3175/')" />
        <Button iconName="ion:logo-x" text="Twitter" @click="openURL('https://x.com/olafsergent')" />
      </div>
      <span>© {{ new Date().getFullYear() }} Portfolio - Olaf-Marie Sergent</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>