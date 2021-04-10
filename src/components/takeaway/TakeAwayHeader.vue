<template>
  <div class="container">
    <span class="title">Asporto</span>
    <div class="actions">
      <div class="action-circle-container">
        <font-awesome-icon
          class="action"
          :icon="['fas', 'arrow-down']"
          size="2x"
        ></font-awesome-icon>
      </div>
      <span class="hours">{{ lower }} - {{ upper }} </span>
      <div class="action-circle-container">
        <font-awesome-icon
          class="action"
          :icon="['fas', 'arrow-up']"
          size="2x"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slotLower", "slotUpper"],
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
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.actions {
  margin-top: 0.5rem;
  display: flex;
  width: 70%;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
}
.title {
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  font-size: 3.25rem;
  color: var(--mainbrown);
}
.hours {
  font-family: "Lato", "sans-serif";
  font-size: 2.5rem;
  color: var(--mainbrown);
}
.action-circle-container {
  display: flex;
  height: 60px;
  width: 60px;
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