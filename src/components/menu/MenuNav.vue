<template>
  <div class="nav">
    <div class="nav-list">
      <div
        :class="activeStyle('fritti')"
        class="nav-item"
        @click="selectCategory('Fritti')"
      >
        <font-awesome-icon
          :icon="['fas', 'ring']"
          class="icon"
          size="3x"
        ></font-awesome-icon>
        <span class="category">Fritti</span>
      </div>
      <div
        @click="selectCategory('Pizze')"
        class="nav-item"
        :class="activeStyle('pizze')"
      >
        <div class="item-flex">
          <font-awesome-icon
            :icon="['fas', 'pizza-slice']"
            size="3x"
            class="icon"
            style="transform: rotate(275deg)"
          ></font-awesome-icon>
          <span class="category">Pizze</span>
        </div>
      </div>
      <div
        :class="activeStyle('panini')"
        class="nav-item"
        @click="selectCategory('Panini')"
      >
        <font-awesome-icon
          :icon="['fas', 'hamburger']"
          class="icon"
          size="3x"
        ></font-awesome-icon>
        <span class="category">Panini</span>
      </div>
      <div
        :class="activeStyle('bere')"
        class="nav-item"
        @click="selectCategory('Bere')"
      >
        <font-awesome-icon
          :icon="['fas', 'beer']"
          class="icon"
          style="margin-left: 0.5rem"
          size="3x"
        ></font-awesome-icon>
        <span class="category">Bere</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: "fritti",
    };
  },
  methods: {
    selectCategory(selected) {
      this.active = selected.toLowerCase();
      this.$emit("category-selected", selected);
    },
    activeStyle(category) {
      return this.active === category ? "active" : "";
    },
  },
};
</script>

<style scoped>
.nav {
  position: absolute;
  width: 100%;
  height: 20%;
  bottom: 0;
}

.nav-list {
  position: absolute;
  width: 100%;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.nav-item {
  background-image: linear-gradient(180deg, #2d150b 0%, #623d22 120%);
  color: white;
  border-radius: 26px;
  border: 2px solid white;
  filter: drop-shadow(0px 3px 3px rgba(45, 21, 11, 1));
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 7.5rem;
  width: 7.5rem;
  font-weight: 400;
}

.active {
  background-color: var(--evidenceorange);
  background-image: none;
  color: var(--mainbrown);
  border: 2px solid var(--mainbrown);
  font-weight: 900;
}

.item-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.category {
  font-family: "Raleway";
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-top: 0.6rem;
}

.icon {
  margin-top: 0.9rem;
}
</style>