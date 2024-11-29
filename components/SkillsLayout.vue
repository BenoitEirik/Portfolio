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
            <tr v-for="level in skillLevels" :key="level.level">
              <td class="min-w-12 font-bold">{{ level.level }} / 5</td>
              <td>
                <div class="font-bold">{{ level.title }}</div>
                <div class="pb-4">{{ level.description }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </Simplebar>
    </aside>
  </section>
</template>

<style></style>