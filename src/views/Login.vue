<template lang="pug">
  .login
    LoginForm
    LoginImage
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("Login");

export default {
  components: {
    AlertMessage: () => import("@/components/AlertMessage"),
    LoginForm: () => import("@/components/LoginForm"),
    LoginImage: () => import("@/components/LoginImage"),
  },
  data: () => ({
    form: {},
  }),
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style lang="scss">
.login {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
