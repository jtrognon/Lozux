<template>
  <div class="desktop">
    <div class="icons">
      <div v-for="icon in icons" :key="icon.name" class="icon">
        <img :src="icon.src" :alt="icon.name" />
        <span>{{ icon.name }}</span>
      </div>
    </div>
    <script setup>
    import '/resources/background/3DAssets/tux_hello.js'
    </script>


    <div class="taskbar">
      <div class="start-button">Start</div>
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

<script>
export default {
  name: "Level1",
  data() {
    return {
      icons: [
        { name: "Mon PC", src: "/resources/icons/pc.png" },
        { name: "Corbeille", src: "/resources/icons/trash.png" },
        { name: "Docs", src: "/resources/icons/folder.png" }
      ],
      tasks: ["Chrome", "VS Code"],
      time: new Date().toLocaleTimeString()
    };
  },
  mounted() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
};
</script>

<style scoped>
.desktop {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('/resources/background/wallpaper.jpg') no-repeat center center;
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
  background: #0078d7;
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
</style>
