<template lang="pug">
.modal
  .tools
    eva-icon.close-icon(name="close-outline" @click="setModalVisible(false)")
    h2 Create Customer
    form(@submit.prevent="submitCustomer()")
      ModalInput(placeholder="First Name" :value="newRecord.first_name" v-model="newRecord.first_name")
      ModalInput(placeholder="Last Name" :value="newRecord.last_name" v-model="newRecord.last_name")
      ModalInput(placeholder="Email" :value="newRecord.email" v-model="newRecord.email")
      ModalInput(placeholder="Phone Number" :value="newRecord.phone_number" v-model="newRecord.phone_number")
      SubmitButton
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Customers");
export default {
  name: "Customers",
  props: {
    newRecord: {
      type: Object,
    },
  },
  components: {
    ToolBar: () => import("@/components/ToolBar"),
    ModalInput: () => import("@/components/ModalInput"),
    SubmitButton: () => import("@/components/SubmitButton"),
  },
  async created() {
    await this.loadCustomers();
  },
  methods: {
    ...mapActions(["loadCustomers", "setModalVisible", "createCustomer"]),
    submitCustomer() {
      this.createCustomer(this.newRecord);
    },
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

  h2 {
    margin: 0.5rem;
  }

  .close-icon {
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
