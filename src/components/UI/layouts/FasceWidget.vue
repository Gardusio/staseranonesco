<template>
  <div class="actions">
    <div class="action-circle-container">
      <font-awesome-icon
        class="action"
        :icon="['fas', 'arrow-down']"
      ></font-awesome-icon>
    </div>
    <span class="hours">{{ lower }} - {{ upper }} </span>
    <div class="action-circle-container">
      <font-awesome-icon
        class="action"
        :icon="['fas', 'arrow-up']"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slotLower: new Date().setHours(18, 30, 0, 0),
      slotUpper: new Date().setHours(22, 30, 0, 0),
    };
  },
  computed: {
    lower() {
      const date = new Date(this.slotLower);
      if (date.getMinutes() != 0)
        return date.getHours().toString() + "." + date.getMinutes().toString();
      return date.getHours.toString();
    },
    upper() {
      const date = new Date(this.slotUpper);
      if (date.getMinutes() != 0)
        return date.getHours().toString() + "." + date.getMinutes().toString();
      return date.getHours.toString();
    },
  },
};
</script>

<style scoped>
.actions {
  margin-top: 0.5rem;
  display: flex;
  width: 45%;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
}
.hours {
  font-family: "Lato", "sans-serif";
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--secondarybrown);
}
.action-circle-container {
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: var(--mainbrown);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.action {
  color: var(--backgroundgray);
}
</style>
