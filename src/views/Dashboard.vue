<template>
  <div>
    <h1>Dashboard</h1>
    <div>
      <cardbase />
    </div>
  </div>
</template>

<script>
import Cardbase from "../components/Cardbase.vue";
export default {
  name: "Dashboard",
  components: { Cardbase },
  setup() {},
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const permissao = login.autorizacao;
    if (permissao[1].Dashboard === "false") {
      alert("Você não possue autorização!");
      next("/Login");
    }
    next();
  },
};
</script>

<style>
h1::before {
  background-color: lightseagreen;
  content: "";
  display: inline-block;
  width: 5px;
  height: 23px;
  margin-right: 5px;
}
</style>
