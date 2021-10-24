<template lang="pug">
.modal
  .tools
    eva-icon.close-icon(name="close-outline" @click="setModalVisible(false)")
      h2 Create Customer
    form
      input(value="Juan")
      input(value="Juan@email.com")
      input(value="18237481298")
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Customers");
export default {
  name: "Customers",
  components: {
    ToolBar: () => import("@/components/ToolBar"),
  },
  async created() {
    await this.loadCustomers();
  },
  methods: {
    ...mapActions([
    "loadCustomers",
    "setModalVisible",
    ]),
  },
  computed: {
    ...mapGetters(["customers", "columns"]),
  },
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  background-color: coral;
  top: 10%;
  right: 10%;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  .close-icon{
    display: block;
    text-align: right;
    padding: 15px 15px 0 0;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
}
</style>
