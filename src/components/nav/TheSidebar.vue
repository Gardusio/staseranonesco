<template>
  <nav class="sidebar-container">
    <ul class="sidebar__icon-list">
      <router-link to="/sala"
        ><nav-item item="sala" text="Sala" :isActive="activeElem === 'sala'">
        </nav-item>
      </router-link>
      <router-link to="/delivery">
        <nav-item
          item="delivery"
          text="Consegne"
          :isActive="activeElem === 'delivery'"
        >
        </nav-item>
      </router-link>
      <router-link to="/take-away">
        <nav-item item="ta" text="Asporto" :isActive="activeElem === 'ta'">
        </nav-item>
      </router-link>
      <router-link to="/orders">
        <nav-item
          item="orders"
          text="Ordini"
          :isActive="activeElem === 'orders'"
        >
        </nav-item>
      </router-link>
      <router-link to="/menu">
        <nav-item
          item="menu"
          text="Menu"
          :isActive="activeElem === 'menu'"
        ></nav-item>
      </router-link>
      <router-link to="/ingredients">
        <nav-item
          item="inventario"
          text="Esauriti"
          :isActive="activeElem === 'ingredients'"
        >
        </nav-item>
      </router-link>
      <router-link to="/home">
        <nav-item item="back" text="Home"> </nav-item>
      </router-link>
    </ul>
  </nav>
</template>

<script>
// import BackNavItem from "../nav/BackNavItem";
import NavItem from "../nav/NavItem";

export default {
  props: ["activeElem"],
  components: {
    NavItem,
  },
};
</script>

<style scoped>
a,
a.router-link-active {
  text-decoration: none;
  text-decoration-color: white;
}
.sidebar-container {
  position: fixed;
  height: 100%;
  width: 90px;
  padding: 0.8rem 0.8rem;
  background-color: #2d150b;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.sidebar__icon-list {
 align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>