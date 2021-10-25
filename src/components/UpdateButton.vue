<template lang="pug">
button.update-button
  eva-icon(name="edit-2-outline")
</template>
<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapGetters, mapActions } = createNamespacedHelpers("Customers");

export default {
  name: "UpdateButton",
  // methods: {
  //   ...mapActions(["setModalVisible"]),
  // },
  // computed: {
  //   ...mapGetters(["isModalvisible"]),
  // },
};
</script>

<style lang="scss">
.update-button {
  align-items: center;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: yellow;
  &:hover {
    background-color: darken(yellow, 10%);
  }
}
</style>
