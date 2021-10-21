<template lang="pug">
  .flex-container
    .logo
      img(src="@/assets/logo.png")
    h2 Iniciar sesion
    h3 Ingresa tus datos
    form(@submit.prevent="login").login-form
      LoginInput(placeholder="Email" icon="people-outline" :value='newRecord.email' v-model="newRecord.email")
      LoginInput(placeholder="Password" icon="email-outline" :value='newRecord.email' v-model="newRecord.password")
      button.submit(type="submit") Login
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Login");

export default {
  name: "LoginForm",
  data: () => ({
    newRecord: {
      type: Object,
    },
  }),
  components: {
    LoginInput: () => import("@/components/LoginInput"),
  },
  methods: {
    ...mapActions(["loginUser"]),
    async login(){
      await this.loginUser(this.newRecord)
    }
  }
};
</script>

<style lang="scss">
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    img {
      max-width: 50%;
    }
  }

  form{
    display: flex;
    flex-direction: column;
    .submit {
      background-color: black;
      color: white;
      border: none;
      border-radius: 2px;
      padding: .5rem 2rem;
      margin: .5rem 0;
    }
  }
}
</style>
