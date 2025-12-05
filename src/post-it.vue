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
  <div class="en_tete">
    <p>
      {{ titre }}
    </p>
    <button class="boutton" @click="fermePopup(id)">{{ texteBouton }}</button>
  </div>
  <p>{{ texte }}</p>
</template>

<style scoped>
  
</style>