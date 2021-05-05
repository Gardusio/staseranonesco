<template>
  <div class="header-container">
    <div class="action-container" @click="showAddModal = true">
      <font-awesome-icon class="plus" :icon="['fas', 'plus']" />
      <span class="text">Aggiungi Tavoli</span>
    </div>
    <div class="action-container">
      <font-awesome-icon class="out" :icon="['fas', 'sign-out-alt']" />
      <span class="text">Cambia sala</span>
    </div>
    <div class="action-container">
      <font-awesome-icon class="out" :icon="['fas', 'pen-fancy']" />
      <span class="text">Prenota tavolo</span>
    </div>
  </div>
  <div class="separator"></div>
  <big-modal v-if="showAddModal" @close="showAddModal = false">
    <add-tables @close="showAddModal = false"></add-tables>
  </big-modal>
</template>

<script>
import BigModal from "./../UI/layouts/BigModal";
import AddTables from "./tables/AddTables";
export default {
  components: {
    BigModal,
    AddTables,
  },
  data() {
    return {
      showAddModal: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 1rem;
  margin-left: 90px;
  margin-right: 33%;
}
.action-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.out,
.plus {
  color: var(--primarybrown);
  margin-bottom: 4px;
  height: 25px;
  width: 25px;
  color: var(--mainbrown);
}

.text {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  color: var(--mainbrown);
  margin-top: 0.2rem;
}

.separator {
  border: 0;
  height: 1px;
  margin-left: 9%;
  margin-right: 35%;
  margin-top: 1rem;
  background: linear-gradient(var(--mainbrown), white);
}
</style>
