<script setup>
  const props = defineProps(['id', 'titre', 'contenu', 'action', 'top', 'left', 'top'])

  const texteBouton = "X"

  function fermePopup(){
    document.querySelector("#"+props.id).remove()
  }

  function entierAleatoire(){
    Math.floor(Math.random() * 10);
  }
</script>

<template>
  <div class="popup" :id="props.id" :style="'left:'+props.left+'vw; top:'+props.top+'vh;'">
    <div class="enTete">
      <p class="titre">
        {{ props.titre }}
      </p>
      <button class="bouton" @click="fermePopup(id); $emit('fermeture')">{{ texteBouton }}</button>
    </div>
    <p>{{ props.contenu }}</p>

    <button class="action" @click="fermePopup(id); $emit('fermeture')" v-if="props.action != null">{{ props.action }}</button>
  </div>
</template>

<style scoped>

.popup {
  /*position*/
  width: 500px;
  position: absolute;
  
  /*Bordure*/
  border: solid 1.5px;
  box-shadow: 10px 5px 5px grey;
  background-color: white;

  text-align: center;
}

.enTete {
  display: flex;
  justify-content: center;

  background-color: grey;
  border-bottom: solid 1.5px;
}

.bouton {
  position: absolute;
  right:0px;
  height: 25px;
  width: 20px;
}

.action{
  margin-bottom: 10px;
}

</style>