<template lang="pug">
  .tool-bar
    .page-information
      h1.title Customers
      h2.subtitle A list of your customers:
    AddButton
</template>
<script>
export default {
  name: "ToolBar",
  components: {
    AddButton: () => import("@/components/AddButton"),
  },
};
</script>

<style lang="scss">
.tool-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .page-information {
    text-align: left;

    .title, .subtitle {
      margin: 0;
    }
  }
}
</style>
