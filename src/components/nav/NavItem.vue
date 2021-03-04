<template>
  <div class="container">
    <font-awesome-icon
      :icon="navItem"
      size="2x"
      :style="{ color: iconColor }"
    ></font-awesome-icon>
    <span class="text" :class="activeText"> {{ text }} </span>
  </div>
</template>

<script>
export default {
  props: ["text", "isActive", "item"],
  computed: {
    navItem() {
      if (this.item === "sala") return ["fas", "home"];
      else if (this.item === "delivery") return ["fas", "car"];
      else if (this.item === "ta") return ["fas", "hand-holding-usd"];
      else if (this.item === "orders") return ["fas", "copy"];
      else if (this.item === "menu") return ["fas", "utensils"];
      else if (this.item === "back") return ["fas", "arrow-circle-left"];
      else this.item === "inventario";
      return ["fas", "bacon"];
    },
    iconColor() {
      if (this.isActive) {
        return "#EFBE7D";
      } else return "white";
    },
    activeText() {
      if (this.isActive) return "activeText";
      else return "inactiveText";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  cursor: pointer;
}
.text {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  margin-top: 0.3rem;
}
.inactiveText {
  color: white;
}
.activeText {
  color: #efbe7d;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
}
</style>