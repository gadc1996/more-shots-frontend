<template lang="pug">
  .login-form
    .logo
      img(src="@/assets/logo.png")
    h2 Iniciar sesion
    h3 Ingresa tus datos
    form(@submit.prevent="login").login-form
      LoginInput(placeholder="Email" icon="people-outline" :value='newRecord.email' v-model="newRecord.email")
      LoginInput(placeholder="Password" icon="email-outline" :value='newRecord.email' v-model="newRecord.password")
      SubmitButton
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
    SubmitButton: () => import("@/components/SubmitButton"),
  },
  methods: {
    ...mapActions(["loginUser"]),
    async login() {
      await this.loginUser(this.newRecord);
    },
  },
};
</script>

<style lang="scss">
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    img {
      max-width: 50%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }
}
</style>
