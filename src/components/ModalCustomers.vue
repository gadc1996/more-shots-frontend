<template lang="pug">
.modal
  .tools
    eva-icon.close-icon(name="close-outline" @click="setModalVisible(false)")
    h2 Create Customer
    form(@submit.prevent="submitUser()")
      input(value="Juan")
      input(value="Juan@email.com")
      input(value="18237481298")
      SubmitButton
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Customers");
export default {
  name: "Customers",
  components: {
    ToolBar: () => import("@/components/ToolBar"),
    SubmitButton: () => import("@/components/SubmitButton"),
  },
  async created() {
    await this.loadCustomers();
  },
  methods: {
    ...mapActions([
    "loadCustomers",
    "setModalVisible",
    "submitUser",
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
  top: 10%;
  background-color: white;
  border: 1px solid black;
  right: 25%;
  width: 50%;
  border-radius: 20px;
  padding: 1rem;
  .close-icon{
    display: block;
    text-align: right;
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
