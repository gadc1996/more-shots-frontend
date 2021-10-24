<template lang="pug">
  .customers {{customers}}
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Customers");
export default {
  name: "Customers",
  async created(){
    await this.loadCustomers()
  },
  methods: {
    ...mapActions([
      'loadCustomers'
    ])
  },
  computed: {
    ...mapGetters([
      'customers'
    ])
  }
};
</script>

<style lang="scss">
.customers {
  border-radius: 20px 0 0 20px;
  background-color: white;
}
</style>
