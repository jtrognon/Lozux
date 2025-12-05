<template>
  <div class="desktop">
    <div class="icons">
      <div v-for="icon in icons" :key="icon.name" class="icon">
        <img :src="icon.src" :alt="icon.name" />
        <span>{{ icon.name }}</span>
      </div>
    </div>

    <div class="taskbar">
      <div class="start-button"><img src="/windows11.png" alt=""></div>
      <div class="tasks">
        <div v-for="task in tasks" :key="task" class="task">{{ task }}</div>
      </div>
      <div class="system-tray">
        <span>logo musique</span>
        <span>logo horloge {{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const icons = [
    { name: "Suite Office", src: "/bureau.png" },
    { name: "Edge", src: "/edge.png" },
    { name: "Docs", src: "/explorer.png" }
  ]
  const tasks = ["Chrome", "VS Code"]
  const time = new Date().toLocaleTimeString()

  function mounted() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

</script>

<style scoped>
.desktop {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('/wallpaper.jpeg') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.icons {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  cursor: pointer;
}

.icon img {
  width: 48px;
  height: 48px;
}
.taskbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: rgba(50, 50, 50, 0.9);
  color: white;
  padding: 0 10px;
  font-size: 14px;
}

.start-button {
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.tasks {
  display: flex;
  gap: 10px;
}

.task {
  background: rgba(255, 255, 255, 0.1);
  padding: 0 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.system-tray {
  display: flex;
  gap: 8px;
  align-items: center;
}

.start-button>img {
  height: 40px;
  width: 40px;
}
</style>
