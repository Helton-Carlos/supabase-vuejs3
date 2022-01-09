<template>
  <div class="flex">
    <div>
      <BarraMenu />
    </div>
    <div class="container">
      <Dashboard />
    </div>
  </div>
</template>

<script>
import BarraMenu from "../components/BarraMenu.vue";
import Dashboard from "../views/Dashboard.vue";
export default {
  name: "Home",
  components: {
    BarraMenu,
    Dashboard,
  },
};
</script>
