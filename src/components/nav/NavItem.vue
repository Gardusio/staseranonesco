<template>
  <div class="sidebar-nav-item-container">
    <font-awesome-icon
      :icon="navItem"
      :style="{ color: iconColor }"
      :size="iconSize"
    ></font-awesome-icon>
    <span class="sidebar-nav-item-text" :class="activeText"> {{ text }} </span>
  </div>
</template>

<script>
export default {
  props: ["text", "isActive", "item"],
  computed: {
    navItem() {
      if (this.item === "sala") return ["fas", "home"];
      else if (this.item === "delivery") return ["fas", "car"];
      else if (this.item === "ta") return ["fas", "layer-group"];
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
    iconSize() {
      if (this.isActive) 
        return "2x";
      return "1x";
    },
    activeText() {
      if (this.isActive) return "sidebar-nav-item-activeText";
      else return "sidebar-nav-item-inactiveText";
    },
  },
};
</script>

<style scoped>
.sidebar-nav-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  cursor: pointer;
}
.sidebar-nav-item-text {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  margin-top: 0.3rem;
}

.sidebar-nav-item-inactiveText {
  color: white;
}

.sidebar-nav-item-activeText {
  color: #efbe7d;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
}
</style>