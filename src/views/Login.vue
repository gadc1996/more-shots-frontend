<template>
  <div>
    <pre>{{ this.user }}</pre>
    <form @submit.prevent="logIn">
      <input v-model="form.email" type="email" placeholder="email" />
      <input v-model="form.password" type="password" placeholder="password" />
      <br />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers('Login')


export default {
  data: () => ({
    form: {},
  }),
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['login']),
    logIn(){
      this.login(this.form)
    }
  },
};
</script>
