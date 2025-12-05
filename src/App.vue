<script setup>
  import {ref} from "vue" 
  import postIt from './postIt.vue'
  import dialogue from './dialogue.vue'
  import Level1  from "./views/Level1.vue";

  const popupsRestant = ref(4);
  
  console.log(popupsRestant);

  const popups = ref([
    {
      id: 1,
      contenu: "Activez Windows !",
      action: "Activer",
      left: entierAleatoire(),
      top: entierAleatoire()
    },
    {
      id: 2,
      contenu: "Pensez aussi à faire ci et ça",
      action: "faire ci et ça",
      left: entierAleatoire(),
      top: entierAleatoire()
    },
    {
      id: 3,
      contenu: "Et ça et ça et ça et avez vous vu ça ??",
      left: entierAleatoire(),
      top: entierAleatoire()
    },
    {
      id: 4,
      contenu: "Tux arrive et met halte à ces conneries",
      action: "mettre fin à ces conneries",
      left: entierAleatoire(),
      top: entierAleatoire()
    },
  ])

  function entierAleatoire(){
    return Math.floor(Math.random() * 65);
  }
</script>

<template>
  <section id="popupSection" v-if="popupsRestant > 0">
    <postIt v-for="popup in popups" :id="'popup_'+popup.id" :contenu="popup.contenu" :action="popup.action" :left="popup.left" :top="popup.top" @fermeture="popupsRestant--"/>
  </section>

  <dialogue v-if="popupsRestant==0" />

  <Level1/>
</template>

<style scoped>
  .desktop {
    z-index: -1;
  }
</style>
