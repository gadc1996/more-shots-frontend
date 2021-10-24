<template lang="pug">
  .customers 
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
  },
  async created() {
    await this.loadCustomers();
  },
  methods: {
    ...mapActions(["loadCustomers"]),
  },
  computed: {
    ...mapGetters(["customers", "columns"]),
  },
};
</script>

<style lang="scss">
.customers {
  border-radius: 20px 0 0 20px;
  background-color: white;

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
