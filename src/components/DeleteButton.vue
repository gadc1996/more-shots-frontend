<template lang="pug">
button.delete-button
  eva-icon(name="trash-2-outline")
</template>
<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapGetters, mapActions } = createNamespacedHelpers("Customers");

export default {
  name: "DeleteButton",
  // methods: {
  //   ...mapActions(["setModalVisible"]),
  // },
  // computed: {
  //   ...mapGetters(["isModalvisible"]),
  // },
};
</script>

<style lang="scss">
.delete-button {
  align-items: center;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: lighten(red, 15%);
  &:hover {
    background-color: red;
  }
}
</style>
