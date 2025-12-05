<script setup>
    import {ref} from "vue";
    var dialogueCourant = ref(0);

    const dialogues = [
        {
            texte: "Coucou, fais ça !",
            choix: [
                {id: 1, texte: "Oui"},
                {id: 2, texte: "Non"}
            ]
        },
        {
            texte: "Coucou, fais pas ça !",
            choix: [
                {id: 2, texte: "Just dance"},
                {id: 2, texte: "MarioKart"},
                {id: 3, texte: "Abandon"}
            ]
        },
        {
            texte: "Fin !",
            choix: [

            ]
        },
        {
            texte: "Mort ...",
            choix: [

            ]
        }
    ]

</script>

<template>
  <div class="pageDialogue">
    <div class="dialogue">
        <p>
            {{ dialogues[dialogueCourant].texte }}
        </p>
        <div class="boutons">
            <button v-for="choix in dialogues[dialogueCourant].choix" @click="dialogueCourant = choix.id">{{ choix.texte }}</button>
        </div>
    </div>
  </div>
    <div class="tux">
        <img src="/favicon.ico" alt="Tux">
    </div>
</template>

<style scoped>

.pageDialogue {
    display: flex;
    justify-content: center;
    align-content: space-between;
}

.dialogue {
  /*position*/
  width: 500px;
  position: absolute;
  
  /*Bordure*/
  border: solid 1.5px;
  box-shadow: 10px 5px 5px grey;
  background-color: white;

  text-align: center;
}

.boutons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
}


</style>