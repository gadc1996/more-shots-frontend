<template lang="pug">
  .events
    Modal(:newRecord='newRecord' :storeResource="storeResource" v-if="isModalVisible")
    .tool-bar
      .page-information
        h1.title {{ pageTitle }}
        h2.subtitle A list of your {{ pageTitle }}:
      button.add-button(@click="addResource")
        eva-icon(name="plus-outline")
        | Add
    table
      TableHeader(:columns="columns")
      tr(v-for="resource in resources") 
        td(v-for="column in columns") {{resource[column]}}
        td.table-options
          button(@click="updateResource(resource)").update-button
            eva-icon(name="edit-2-outline")

          button(@click="deleteResource(resource)").delete-button
            eva-icon(name="trash-2-outline")
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Events");
export default {
  name: "Events",
  components: {
    TableHeader: () => import("@/components/TableHeader"),
    Modal: () => import("@/components/Modals/ModalEvents"),
  },
  data: () => ({
    newRecord: {},
  }),
  async created() {
    await this.loadResources();
  },
  methods: {
    ...mapActions([
      "loadResources",
      "setAddResource",
      "setModalVisible",
      "destroy",
    ]),
    addResource() {
      this.newRecord = {};
      this.setAddResource(true);
      this.setModalVisible(true);
    },
    updateResource(resource) {
      this.newRecord = resource;
      this.setAddResource(false);
      this.setModalVisible(true);
    },
    deleteResource(resource) {
      this.destroy(resource);
    },
  },
  computed: {
    ...mapGetters([
      "columns",
      "isModalVisible",
      "pageTitle",
      "resources",
      "storeResource",
    ]),
  },
};
</script>

<style lang="scss">
.events {
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
      &:first-child {
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
