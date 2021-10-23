<template lang="pug">
  .wrapper
    NavBar
    router-view
</template>

<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapGetters } = createNamespacedHelpers("Login");

export default {
  name: 'Dashboard',
  components: {
    NavBar: () => import("@/components/NavBar"),
  },
};
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 1fr 10fr;
}
</style>
