<template lang="pug">
  .customers 
    ModalCustomers(v-if="isModalVisible")
    ToolBar
    table
      tr.headers
        th(v-for="column in columns") {{ column }}
        th Options
      tr(v-for="customer in customers") 
        td {{ customer.full_name }}
        td {{ customer.email }}
        td {{ customer.phone_number }}
        td 
          button ...
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Customers");
export default {
  name: "Customers",
  components: {
    ToolBar: () => import("@/components/ToolBar"),
    ModalCustomers: () => import("@/components/ModalCustomers"),
  },
  data: () => ({
  }), 
  async created() {
    await this.loadCustomers();
  },
  methods: {
    ...mapActions(["loadCustomers"]),
  },
  computed: {
    ...mapGetters([
    "customers", 
    "columns",
    "isModalVisible",
    ]),
  },
};
</script>

<style lang="scss">
.customers {
  border-radius: 20px 0 0 20px;
  background-color: white;
  position: relative;

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
  table {
    border-collapse: collapse;
    width: 100%;
    tr{
      th {
        background-color: #000;
        padding: 10px 0;
        color: #fff;
      }

      &:nth-child(odd) {
        background-color: darken(#fff, 10%);
      }
      &:hover {
        background-color: darken(#fff, 15%);
      }
    }
  }
}
</style>
