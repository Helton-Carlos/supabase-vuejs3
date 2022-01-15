<template>
  <div class="flex">
    <div v-if="this.$route.fullPath==='/'">
      <BarraMenu />
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import BarraMenu from "@/components/BarraMenu.vue";
export default {
  name: "app",
  components: {
    BarraMenu,
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #f3f3f3;
}
.flex {
  display: flex;
}

.flex-jb {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-cl {
  display: flex;
  flex-direction: column;
}
.container {
  width: 90%;
  margin: 15px auto;
  text-align: left;
}
</style>
