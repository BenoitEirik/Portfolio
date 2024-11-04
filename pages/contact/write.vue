<script lang="ts" setup>
const subject = ref('')
const message = ref('')

function send() {
  const emailLink = `mailto:contact@olafsergent.fr?subject=${'[From olafsergent.fr] ' + encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}`
  window.location.href = emailLink
}
</script>

<template>
  <main class="flex max-h-full grow flex-col items-stretch gap-4 overflow-y-auto overflow-x-hidden">
    <h2 class="text-3xl">Sujet</h2>
    <Input type="text" placeholder="Le sujet de votre message" v-model="subject" />
    <h2 class="text-3xl">Message</h2>
    <div class="transition active:scale-95">
      <textarea v-model="message" name="textarea" id="textarea" placeholder="Décrivez votre projet ou partagez votre message ici..."
        class="h-72 min-h-40 w-full max-w-full border-b-4 border-b-neutral-300/20 bg-neutral-600/50 px-3 py-2 outline-none backdrop-blur-md focus:border-b-amber-600" />
    </div>
    <button type="button" @click="send"
      class="square-pixels-on-extremities flex min-w-0 items-center justify-center self-center bg-neutral-600/50 px-3 py-2 outline-none backdrop-blur-md hover:bg-neutral-300/20 focus:bg-neutral-300/20 [&_span]:hover:scale-105 [&_span]:focus:scale-105">
      <span class="text-3xl transition">Envoyer</span>
    </button>
  </main>
</template>

<style></style>