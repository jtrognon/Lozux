<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      id: 0,
      titre : "Julie bg",
      texteBouton : "X",
      texte : "Voici une méchante pop up !"
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    },

  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <div class="popup">
    <div class="enTete">
      <p class="titre">
        {{ titre }}
      </p>
      <button class="bouton" @click="fermePopup(id)">{{ texteBouton }}</button>
    </div>
    <p>{{ texte }}</p>
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


</style>