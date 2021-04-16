<template>
  <div class="actions">
    <div class="hour-actions">
      <div @click="up('lower')">
        <font-awesome-icon
          class="action"
          :icon="['fas', 'chevron-up']"
          size="lg"
        ></font-awesome-icon>
      </div>
      <div @click="down('lower')">
        <font-awesome-icon
          class="action"
          :icon="['fas', 'chevron-down']"
          size="lg"
        ></font-awesome-icon>
      </div>
    </div>
    <span class="hours">{{ slower }} - {{ supper }} </span>
    <div class="hour-actions">
      <div @click="up('upper')">
        <font-awesome-icon
          class="action"
          :icon="['fas', 'chevron-up']"
          size="lg"
        ></font-awesome-icon>
      </div>
      <div @click="down('upper')">
        <font-awesome-icon
          class="action"
          :icon="['fas', 'chevron-down']"
          size="lg"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page", "slotUpper", "slotLower"],
  data() {
    return {
      upper: this.slotUpper,
      lower: this.slotLower,
    };
  },
  mounted() {
    this.upper = this.slotUpper;
    this.lower = this.slotLower;
  },
  methods: {
    up(slot) {
      this.$emit("slotUp", slot);
    },
    down(slot) {
      this.$emit("slotDown", slot);
    },
  },
  computed: {
    slower() {
      const date = new Date(this.slotLower);
      if (date.getMinutes() != 0)
        return date.getHours().toString() + "." + date.getMinutes().toString();
      return date.getHours().toString();
    },
    supper() {
      const date = new Date(this.slotUpper);
      if (date.getMinutes() != 0)
        return date.getHours().toString() + "." + date.getMinutes().toString();
      return date.getHours().toString();
    },
  },
};
</script>

<style scoped>
.actions {
  margin-top: 0.5rem;
  display: flex;
  width: 33%;
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
.action {
  color: var(--mainbrown);
}

.hour-actions {
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
