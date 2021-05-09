<template>
  <div class="sala-header-actions-container">
    <add-table-action />
    <change-sala-action />
    <reservation-action />
  </div>
  <div class="sala-header-actions-separator"></div>
</template>

<script>
import AddTableAction from "./AddTableAction.vue";
import ChangeSalaAction from "./ChangeSalaAction.vue";
import ReservationAction from "./ReservationAction.vue";

export default {
  components: {
    AddTableAction,
    ChangeSalaAction,
    ReservationAction
  },
};
</script>

<style>
.sala-header-actions-container {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 1rem;
  margin-left: 90px;
  margin-right: 33%;
}
.sala-action-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.sala-action-out,
.sala-action-plus {
  color: var(--primarybrown);
  margin-bottom: 4px;
  color: var(--mainbrown);
}

.sala-action-text {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  color: var(--mainbrown);
  margin-top: 0.2rem;
}

.sala-header-actions-separator {
  border: 0;
  height: 1px;
  margin-left: 9%;
  margin-right: 35%;
  margin-top: 1rem;
  background: linear-gradient(var(--mainbrown), white);
}
</style>
