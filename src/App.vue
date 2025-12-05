<script setup>
  import { ref } from "vue";
  import postIt from './postIt.vue'

  var dialogIndex = ref(0)
  const dialogs = ["Hey! Activate Windows 11.", "Oh no!!! it's a virus.", "Hello, I'm Tux!"]

  function changeText() {
    console.log(dialogIndex);
    
    dialogIndex.value++;
  }

  function fermePopup() {
    document.querySelector("#popup_1").destroy();
  }

</script>

<template>
  <main>
    <img src="/favicon.ico" alt="logo VueJS">
    <p id="dialog">{{ dialogs[dialogIndex] }}</p>
    <button @click="changeText()">OK</button>
  </main>

  <section id=" taskbar">

  </section>

  <postIt id="popup_1" @fermePopup="fermePopup()"/>
</template>

<style scoped>

</style>
