<template lang="pug">
button.add-button
  eva-icon(name="plus-outline")
  | Add
</template>
<script>
export default {
  name: "AddButton",
};
</script>

<style lang="scss">
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
</style>
