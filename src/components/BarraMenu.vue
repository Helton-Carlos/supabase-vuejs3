<template>
  <div>
    <div class="barra-lateral">
      <div style="padding: 20px 0px">
        <a href="#"><i class="fas fa-bars"></i></a>
      </div>
      <div v-for="rota in rotas" :key="rota">
        <router-link :to="rota.rota"
          ><i :class="rota.class" style="margin: 15px 0px"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotas: [
        { rota: "/", class: "fas fa-chart-line" },
        /*{ rota: "/usuario", class: "fas fa-user" },
        { rota: "/agendamento", class: "fas fa-calendar-week" },
        { rota: "/grafico", class: "fas fa-chart-bar" },*/
        { rota: "/login", class: "fas fa-sign-in-alt" },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  background-color: #fff;
  color: rgb(10, 10, 78);
  height: 100vh;
  width: 200px;
  box-shadow: rgb(0, 0, 0.5);
}
a {
  color: rgb(0, 0, 0);
  padding: 2px 10px;
  font-size: 22px;
}

.router-link-exact-active {
  width: 100%;
  color: #ffff;
}
.barra-lateral {
  width: 60px;
  height: 100vh;
  background-color: lightseagreen;
}
</style>
