<template>
  <div class="sala-action-container" @click="showAddModal = true">
    <font-awesome-icon
      class="sala-action-plus"
      :icon="['fas', 'plus']"
      size="2x"
    />
    <span class="sala-action-text">Aggiungi Tavoli</span>
  </div>
  <big-modal v-if="showAddModal" @close="showAddModal = false">
    <add-tables @close="showAddModal = false"></add-tables>
  </big-modal>
</template>

<script>
import BigModal from "../../UI/layouts/modals/BigModal";
import AddTables from "../tables/AddTables";
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
};
</script>
