<template>
  <div class="header-container">
    <back-widget :view="view" @back="back()" />
    <order-title :title="title" :waiting="waiting" />
    <add-button @click="$emit('addLineItem')" />
  </div>
</template>

<script>
//import TableOrderTitle from ""
import AddButton from "../../UI/buttons/AddButton";
import BackWidget from "../../orders/header/BackWidget";
import OrderTitle from "../../orders/header/OrderTitle";
export default {
  props: ["view", "title", "waiting"],
  components: {
    AddButton,
    BackWidget,
    OrderTitle,
  },
  methods: {
    back() {
      if (this.view === "Sala") this.$emit("toSala");
      else if (this.view === "Asporto") this.$emit("toTakeAways");
      else this.$emit("toDeliveries");
    },
  },
};
</script>

<style scoped>
.header-container {
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
}
</style>
