<template lang="pug">
  .customers 
    ModalCustomers(:newRecord='newRecord' v-if="isModalVisible")
    ToolBar
    table
      TableHeader(:columns="columns")
      tr(v-for="customer in customers") 
        td {{ customer.full_name }}
        td {{ customer.email }}
        td {{ customer.phone_number }}
        td.table-options
          button.update-button
            eva-icon(name="edit-2-outline")
          button(@click="removeResource(customer)").delete-button
            eva-icon(name="trash-2-outline")
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Customers");
export default {
  name: "Customers",
  components: {
    ToolBar: () => import("@/components/ToolBar"),
    TableHeader: () => import("@/components/TableHeader"),
    ModalCustomers: () => import("@/components/ModalCustomers"),
  },
  data: () => ({
    newRecord: {},
  }),
  async created() {
    await this.loadCustomers();
  },
  methods: {
    ...mapActions([
    "loadCustomers",
    "destroy"
    ]),
    removeResource(resource){
      this.destroy(resource)
    }
  },
  computed: {
    ...mapGetters(["customers", "columns", "isModalVisible"]),
  },
};
</script>

<style lang="scss">
.customers {
  border-radius: 20px 0 0 20px;
  background-color: white;
  position: relative;

  table {
    border-collapse: collapse;
    width: 100%;
    tr {
      &:nth-child(odd) {
        background-color: darken(#fff, 10%);
      }
      &:hover {
        background-color: darken(#fff, 15%);
      }
      &:first-child{
        background-color: black;
        &:hover {
          background-color: black;
        }
      }
    }
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
  }
}
</style>
