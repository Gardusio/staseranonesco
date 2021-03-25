<template>
  <div class="nav">
    <div class="nav-list">
      <div class="nav-item">
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
      <div class="nav-item">
        <font-awesome-icon
          :icon="['fas', 'hamburger']"
          class="icon"
          size="3x"
        ></font-awesome-icon>
        <span class="category">Panini</span>
      </div>
      <div class="nav-item">
        <font-awesome-icon
          :icon="['fas', 'beer']"
          class="icon"
          style="margin-left:0.5rem;"
          size="3x"
        ></font-awesome-icon>
        <span class="category">Bere</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
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
  background-color: #2d150b;
  border-radius: 26px;
  border: 2px solid white;
  filter: drop-shadow(0px 3px 3px rgba(45, 21, 11, 1));
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 7.5rem;
  width: 7.5rem;
}

.item-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.category {
  font-family: "Raleway";
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-top: 0.6rem;
}

.icon {
  color: white;
  margin-top: 0.9rem;
}
</style>