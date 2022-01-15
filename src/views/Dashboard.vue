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
  name: "dashboard",
  components:{Cardbase}
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
