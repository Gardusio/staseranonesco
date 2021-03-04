<template>
  <div class="header-container">
    <div class="action-container" @click="showAddModal = true">
      <font-awesome-icon class="plus" :icon="['fas', 'plus']" />
      <span class="text">Aggiungi Tavoli</span>
    </div>
    <div class="action-container" @click="showDeleteModal = true">
      <font-awesome-icon class="trash" :icon="['fas', 'trash']" />
      <span class="text">Elimina Tavoli</span>
    </div>
  </div>
  <big-modal v-if="showAddModal" @close="showAddModal = false">
    <add-tables></add-tables>
  </big-modal>
  <small-modal v-if="showDeleteModal" @close="showDeleteModal = false">
    <delete-tables></delete-tables>
  </small-modal>
</template>

<script>
import SmallModal from "../layouts/SmallModal.vue";
import BigModal from "./../layouts/BigModal";
import AddTables from "./tables/AddTables";
import DeleteTables from "./tables/DeleteTables";
export default {
  components: {
    BigModal,
    AddTables,
    SmallModal,
    DeleteTables,
  },
  data() {
    return {
      showAddModal: false,
      showDeleteModal: false,
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
  margin-left: 12%;
  margin-right: 35%;
}
.action-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.trash,
.plus {
  color: var(--primarybrown);
  margin-bottom: 4px;
}

.trash {
  height: 23px;
  width: 18px;
}

.plus {
  height: 25px;
  width: 25px;
}

.text {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  color: black;
}
</style>