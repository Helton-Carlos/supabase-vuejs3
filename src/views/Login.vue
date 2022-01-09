<template>
  <div>
    <div>
      <form
        style="background-color: #ccc; padding: 20px 30px 50px 30px"
        class="flex-cl"
      >
        <h2 style="padding: 5px 0">Sistema Supabase</h2>
        <hr />
        <div style="margin: 10px 0px" class="flex-cl">
          <label>Login</label>
          <input type="text" v-model="usuario" placeholder="Usuario" />
          <label>Password</label>
          <input type="password" v-model="password" placeholder="Password" />
        </div>
        <button @click.prevent="logar()">Logar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { senhaLogin } from "../commands/validacao";
export default {
  setup() {
    return {
      usuario: "",
      password: "",
    };
  },
  methods: {
    logar() {
      let objSenhaLogin = senhaLogin();
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        var usuario = this.usuario.toLowerCase();
        var password = this.password.toLowerCase();
        if (
          objSenhaLogin.login[i].usuario === usuario &&
          objSenhaLogin.login[i].senha === password
        ) {
          this.$router.push("/");
        }
        else{
          alert("O Usuário não existe")
        }
      }

    },
  },
};
</script>

<style scoped>
form {
  margin: 150px auto;
  width: 320px;
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
