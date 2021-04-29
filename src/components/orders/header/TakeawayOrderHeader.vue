<template>
  <div class="header-container">
    <back-widget view="Asporto" @back="back()"></back-widget>
    <order-title></order-title>
    <add-button @click="addLineItem()"></add-button>
  </div>
</template>

<script>
//import TableOrderTitle from ""
import AddButton from "../../UI/buttons/AddButton";
import BackWidget from "../../orders/header/BackWidget";
import OrderTitle from "../../orders/header/OrderTitle";
export default {
  components: {
    AddButton,
    BackWidget,
    OrderTitle,
  },
  methods: {
    back() {
      this.$emit("toTakeAways");
    },
    addLineItem() {
      this.$emit("addLineItem");
    },
  },
};
</script>

<style scoped>
.header-container {
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>