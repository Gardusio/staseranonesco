<template>
    <div class="nav-list">
      <div
        :class="activeStyle('fritti')"
        class="nav-item"
        @click="selectCategory('Fritti')"
      >
        <font-awesome-icon
          :icon="['fas', 'ring']"
          class="icon"
          size="2x"
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
            size="2x"
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
          size="2x"
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
          style="margin-left: 0.33rem"
          size="2x"
        ></font-awesome-icon>
        <span class="category">Bere</span>
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


.nav-list {
  position: absolute;
  width: 90%;
  margin:auto;
  bottom: 1.225rem;
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
  height: 6rem;
  width: 6rem;
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
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin-top: 0.75rem;
}

.icon {
  margin-top: 1rem;
}
</style>