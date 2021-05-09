<template>
  <div class="order-actions-list">
    <action-item
      :icon="['fas', 'print']"
      text="Stampa"
      @click="$emit('showStampa')"
    />

    <action-item
      :icon="['fas', 'euro-sign']"
      text="Conto"
      @click="$emit('showConto')"
    />

    <action-item
      :icon="['fas', 'info-circle']"
      text="Ordine"
      @click="$emit('showInfo')"
    />

    <action-item
      :icon="['fas', 'check-circle']"
      :text="isCompleted ? 'Apri' : 'Chiudi'"
      @click="$emit('showChiudi')"
    />

    <action-item
      :icon="['fas', 'trash']"
      text="Elimina"
      @click="$emit('showElimina')"
    />
  </div>
</template>

<script>
import ActionItem from "./OrdersActionsItem";
export default {
  components: { ActionItem },
  props: ["isCompleted"],
};
</script>

<style scoped>
.order-actions-list {
  position: absolute;
  width: 80%;
  margin: auto;
  bottom: 1.225rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  left: 0;
  right: 0;
}
</style>
