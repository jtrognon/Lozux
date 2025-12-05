<script>
  import ButtonCounter from './ButtonCounter.vue'

  export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      dialogIndex: 0,
      dialogs: ["Hey! Activate Windows 11.", "Oh no!!! it's a virus.", "Hello, I'm Tux!"]
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    changeText() {
      this.dialogIndex++;
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
  }
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
</template>

<style scoped>

</style>
