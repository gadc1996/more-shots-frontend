<template lang="pug">
  .customers 
    Modal(:newRecord='newRecord' :storeResource="storeResource" v-if="isModalVisible")
    .tool-bar
      .page-information
        h1.title Customers
        h2.subtitle A list of your customers:
      button.add-button(@click="addResource")
        eva-icon(name="plus-outline")
        | Add
    table
      TableHeader(:columns="columns")
      tr(v-for="customer in customers") 
        td {{ customer.full_name }}
        td {{ customer.email }}
        td {{ customer.phone_number }}
        td.table-options
          button(@click="updateResource(customer)").update-button
            eva-icon(name="edit-2-outline")

          button.delete-button
            eva-icon(name="trash-2-outline")
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Customers");
export default {
  name: "Customers",
  components: {
    TableHeader: () => import("@/components/TableHeader"),
    Modal: () => import("@/components/ModalCustomers"),
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
    "setAddResource",
    "setModalVisible",
    "destroy"
    ]),
    addResource() {
      this.setAddResource(true)
      this.setModalVisible(true)
    },
    updateResource(resource) {
      this.newRecord = resource
      this.setAddResource(false)
      this.setModalVisible(true)
    },
    removeResource(resource){
      this.destroy(resource)
    }
  },
  computed: {
    ...mapGetters([
    "customers", 
    "columns", 
    "isModalVisible",
    "storeResource"
    ]),
  },
};
</script>

<style lang="scss">
.customers {
  border-radius: 20px 0 0 20px;
  background-color: white;
  position: relative;

  .tool-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .page-information {
      text-align: left;

      .title,
      .subtitle {
        margin: 0;
      }
    }
    .add-button {
      display: flex;
      align-items: center;
      font-weight: 600;
      border: none;
      border-radius: 2px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      background-color: darken(#fff, 10%);
      &:hover {
        background-color: darken(#fff, 15%);
      }
    }
  }

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
