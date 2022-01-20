<template>
  <div>
    <form
      style="background-color: #ccc; padding: 20px 30px 50px 30px"
      class="flex-cl"
    >
      <h2 style="padding: 5px 0">Sistema Supabase</h2>
      <hr />
      <div style="margin: 10px 0px" class="flex-cl">
        <label>Login</label>
        <input type="text" v-model="usuario" placeholder="Digite seu login" />
        <label>senha</label>
        <input type="senha" v-model="senha" placeholder="Digite sua senha" />
      </div>
      <button @click.prevent="Logar()">Logar</button>
    </form>
  </div>
</template>

<script>
import { senhaLogin } from "../commands/validacao";
//import {supabaseUrl} from "../commands/supabase";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      router,
      usuario: "",
      senha: "",
    };
  },
  methods: {
    Logar() {
      let objSenhaLogin = senhaLogin();
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        var usuario = this.usuario.toLowerCase();
        var senha = this.senha.toLowerCase();
        if (
          objSenhaLogin.login[i].usuario === usuario &&
          objSenhaLogin.login[i].senha === senha
        ) {
          this.usuario = objSenhaLogin.login[i];
          localStorage.setItem("login", JSON.stringify(this.usuario));
          this.confirmacaoLogin();
          alert("Seja bem vindo!");
        }
      }
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        var usuario2 = this.usuario.toLowerCase();
        var senha2 = this.senha.toLowerCase();
        if (
          objSenhaLogin.login[i].usuario != usuario2 &&
          objSenhaLogin.login[i].senha != senha2
        ) {
          alert("Login errado!");
        }
      }
    },
    confirmacaoLogin() {
      this.$router.push({ name: "Dashboard" });
    },
    api() {
      var myInit = { method: 'GET',
               headers: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMzgyMTk1LCJleHAiOjE5NTc5NTgxOTV9.tvrNxqMu_cAmkPcwaXL8ZXwl_5MUPonp_m5thKKM03U',
               mode: 'cors',
               cache: 'default' };
      fetch("https://qyvzyshzxcutgozjsoxz.supabase.co",myInit)
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
  created() {
    this.api();
  },
};
</script>

<style scoped>
form {
  margin: 150px auto;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 0 0.4em rgb(207, 207, 207);
}

label {
  font-weight: 700;
  text-align: left;
}
input {
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 8px;
  border: none;
  border-radius: 5px;
}

input:focus {
  outline: 0;
}

button {
  padding: 10px;
  background: lightseagreen;
  font-size: 15px;
  border: none;
  color: #fff;
  border-radius: 5px;
}

button:hover {
  background: rgb(14, 134, 128);
}
</style>
