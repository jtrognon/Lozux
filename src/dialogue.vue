<script setup>
    import {ref} from "vue";
    var dialogueCourant = ref(0);

    const dialogues = [
        {
            texte: "BRAVO Tu y as mis fin !",
            choix: [
                {id: 1, texte: "Génial"},
                {id: 2, texte: "Oh non... J'aime bien avoir des pubs"}
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
            texte: "C'est dommage...",
            choix: [
                {id: 4, texte: "Ok."},
            ]
        },
        {
            texte: "On est fier de toi !",
            choix: [
                {id: 5, texte: "Génial !"},
            ]
        },
        {
            texte: "Installe quand même linux",
            choix: [
            ]
        },
        {
            texte: "C'est super (installe linux)",
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
	align-items: center;
    justify-content: center;
}

.dialogue {
  /*position*/
  top: 10vh;
  width: 500px;
  position: fixed;
  
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
    position: fixed;
    height: 80px;
    width: 80px;
}

</style>