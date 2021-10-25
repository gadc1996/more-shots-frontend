<template lang="pug">
td 
  UpdateButton
  DeleteButton
</template>
<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapGetters, mapActions } = createNamespacedHelpers("Customers");

export default {
  name: "TableOptions",
  components: {
    DeleteButton: () => import("@/components/DeleteButton"),
    UpdateButton: () => import("@/components/UpdateButton"),
  }
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
