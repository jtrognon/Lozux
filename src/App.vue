<script setup>
  import { ref } from "vue";
  import postIt from './postIt.vue'

  var dialogueCourant = ref(1)
  const popups = [
    {
      id: 1,
      contenu: "Activez Windows !",
      action: "Activer"
    },
    {
      id: 2,
      contenu: "Pensez aussi à faire ci et ça",
      action: "faire ci et ça"
    },
    {
      id: 3,
      contenu: "Et ça et ça et ça et avez vous vu ça ??"
    },
    {
      id: 4,
      contenu: "Tux arrive et met halte à ces conneries",
      action: "mettre fin à ces conneries"
    },
  ]

  function changeText() {
    console.log(dialogIndex);
    
    dialogIndex.value++;
  }

</script>

<template>
  <section id="popupSection" v-for="popup in popups">
    <postIt :id="'popup_'+popup.id" :contenu="popup.contenu" :action="popup.action"/>
  </section>

  <section id=" taskbar">

  </section>
</template>

<style scoped>

</style>
