<script setup>
    import {ref} from "vue";
    var dialogueCourant = ref(0);

    const dialogues = [
        {
            texte: "BRAVO Tu as mis fin à ces conneries !",
            choix: [
                {id: 1, texte: "Génial"},
                {id: 2, texte: "Oh non... J'aime bien avoir des pubs de merdes"}
            ]
        },
        {
            texte: "Tu es fait pour linux !",
            choix: [
                {id: 3, texte: "Génial, j'adore être fait pour linux"},
                {id: 2, texte: "Je refuse"},
            ]
        },
        {
            texte: "Tu es con",
            choix: [
                {id: 4, texte: "Ok..."},
            ]
        },
        {
            texte: "Antonin est fier de toi !",
            choix: [
                {id: 5, texte: "Génial, j'adore Antonin !"},
            ]
        },
        {
            texte: "Tux te juge et abandonne",
            choix: [
            ]
        },
        {
            texte: "C'est super",
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
        <img src="/image_tux.png" alt="Tux">
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

img {
    height: 80px;
    width: 80px;
}

</style>