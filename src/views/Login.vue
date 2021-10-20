<template lang="pug">
  .wrapper
    LoginForm
    LoginImage
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Login");

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
  methods: {
    ...mapActions(["login"]),
    logIn() {
      this.login(this.form);
    },
  },
};
</script>

<style lang="scss">
.wrapper{
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

}

</style>
