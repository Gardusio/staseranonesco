<template>
  <div class="header-container">
    <back-widget :view="view" @back="back()"></back-widget>
    <order-title :title="title" :waiting="wait"></order-title>
    <add-button @click="addLineItem()"></add-button>
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
  data() {
    return {
      wait: this.waiting,
    };
  },
  methods: {
    back() {
      if (this.view === "Sala") this.$emit("toSala");
      else if (this.view === "Asporto") this.$emit("toTakeAways");
      else this.$emit("toDeliveries");
    },
    addLineItem() {
      this.$emit("addLineItem");
    },
  },
  watch: {
    waiting() {
      this.wait = this.waiting;
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
