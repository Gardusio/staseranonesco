<template>
  <div class="header-container">
    <back-widget view="Sala" @back="backToSala()"></back-widget>
    <table-order-title></table-order-title>
    <add-button @click="addLineItem()"></add-button>
  </div>
</template>

<script>
//import TableOrderTitle from ""
import AddButton from "../../UI/buttons/AddButton";
import BackWidget from "../../orders/header/BackWidget";
import TableOrderTitle from "../../orders/header/TableOrderTitle";
export default {
  components: {
    AddButton,
    BackWidget,
    TableOrderTitle,
  },
  methods: {
    backToSala() {
      this.$emit("toSala");
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