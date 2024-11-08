<script lang="ts" setup>
interface Item {
  title: string,
  level: number
}

const props = defineProps<{
  items: Item[]
}>()
</script>

<template>
  <section class="relative flex gap-8 overflow-hidden">
    <Simplebar data-simplebar-auto-hide="false"
      class="square-pixels-on-extremities h-full w-full basis-2/3 overflow-x-auto overflow-y-auto border-y-2 border-y-secondary/secondary-opacity bg-primary/primary-opacity p-8 backdrop-blur-primary">
      <div class="grid grid-cols-2 gap-8">
        <Gauge v-for="(item, i) in props.items.sort((a, b) => b.level - a.level)" :key="i" :title="item.title"
          :level="item.level" />
      </div>
    </Simplebar>
    <aside
      class="square-pixels-on-extremities flex shrink-0 basis-1/3 flex-col items-stretch overflow-hidden border-y-2 border-y-secondary/secondary-opacity bg-primary/primary-opacity backdrop-blur-primary">
      <span class="p-4">
        <h4 class="text-2xl font-bold">Degré de maîtrise d'une compétence</h4>
      </span>
      <hr class="h-[1px] border-none bg-secondary/secondary-opacity">
      <Simplebar data-simplebar-auto-hide="false" class="h-full overflow-y-auto overflow-x-hidden p-4">
        <table>
          <tbody>
            <tr class="font-bold">
              <td class="min-w-12">1 / 5</td>
              <td>Notions de base</td>
            </tr>
            <tr>
              <td />
              <td class="pb-4">Tu as acquis quelques connaissances théoriques et pratiques, mais tu n’as pas encore
                beaucoup
                d’expérience.</td>
            </tr>
            <tr class="pt-2 font-bold">
              <td class="min-w-12">2 / 5</td>
              <td>Débutant</td>
            </tr>
            <tr>
              <td />
              <td class="pb-4">Tu as déjà utilisé la compétence dans un cadre limité, tu connais les concepts principaux
                et sais les
                appliquer avec un soutien ou des recherches.</td>
            </tr>
            <tr class="font-bold">
              <td class="min-w-12">3 / 5</td>
              <td>Intermédiaire</td>
            </tr>
            <tr>
              <td />
              <td class="pb-4">Tu maîtrises la compétence de manière autonome dans des contextes variés, mais tu
                rencontres encore
                parfois des défis ou des inconnus.</td>
            </tr>
            <tr class="font-bold">
              <td class="min-w-12">4 / 5</td>
              <td>Avancé</td>
            </tr>
            <tr>
              <td />
              <td class="pb-4">Tu es à l’aise avec la compétence dans des situations complexes, tu peux guider d'autres
                personnes et
                résoudre des problèmes plus difficiles.</td>
            </tr>
            <tr class="font-bold">
              <td class="min-w-12">5 / 5</td>
              <td>Expert</td>
            </tr>
            <tr>
              <td />
              <td>Tu maîtrises complètement la compétence, tu connais les meilleures pratiques, et tu peux enseigner ou
                innover dans ce domaine.</td>
            </tr>
          </tbody>
        </table>
      </Simplebar>
    </aside>
  </section>
</template>

<style></style>