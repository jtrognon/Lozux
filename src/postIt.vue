<script setup>
    var titre = "Julie bg"
    const texteBouton = "X"
    var texte = "Voici une méchante pop up !"
</script>

<template>
  <div class="en_tete">
    <p>
      {{ titre }}
    </p>
    <button class="boutton" @click="$emit('fermePopup')">{{ texteBouton }}</button>
  </div>
  <p>{{ texte }}</p>
</template>

<style scoped>
  
</style>