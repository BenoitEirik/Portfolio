<script lang="ts" setup>
useHead({
  title: 'Me contacter'
})

const subject = ref('')
const message = ref('')

function send() {
  const emailLink = `mailto:contact@olafsergent.fr?subject=${'[From olafsergent.fr] ' + encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}`
  window.location.href = emailLink
}
</script>

<template>
  <main class="flex overflow-y-auto overflow-x-hidden flex-col gap-4 items-stretch max-h-full grow">
    <h2 class="text-3xl">Sujet</h2>
    <Input type="text" placeholder="Le sujet de votre message" v-model="subject" />
    <h2 class="text-3xl">Message</h2>
    <div class="transition active:scale-95">
      <textarea v-model="message" name="textarea" id="textarea" placeholder="Décrivez votre projet ou partagez votre message ici..."
        class="px-3 py-2 w-full max-w-full h-72 border-b-4 backdrop-blur-md outline-none min-h-40 border-b-secondary/secondary-opacity bg-primary/primary-opacity focus:border-b-focus" />
    </div>
    <button type="button" @click="send"
      class="square-pixels-on-extremities flex min-w-0 items-center justify-center self-center bg-primary/primary-opacity px-3 py-2 outline-none backdrop-blur-md hover:bg-secondary/secondary-opacity focus:bg-secondary/secondary-opacity [&_span]:hover:scale-105 [&_span]:focus:scale-105">
      <span class="text-3xl transition">Envoyer</span>
    </button>
  </main>
</template>

<style></style>