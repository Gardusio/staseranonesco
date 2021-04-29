<template>
  <div class="container">
    <div class="qty" :style="color">{{ qty }}x</div>
    <span class="name" :style="scale ? nameScaled : ''">{{ name }}</span>
    <section class="actions">
      <div class="action action-minus" @click="decrement()">
        <font-awesome-icon
          class="icon"
          :icon="['fas', 'minus-circle']"
          size="lg"
        ></font-awesome-icon>
      </div>
      <div class="action action-plus" @click="increment()">
        <font-awesome-icon
          class="icon"
          :icon="['fas', 'plus-circle']"
          size="lg"
        ></font-awesome-icon>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["name", "qty", "type", "scale"],
  methods: {
    increment() {
      this.$emit("add");
    },
    decrement() {
      this.$emit("remove");
    },
    hasToScale(name) {
      const numWords = (str) => {
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        return str.split(" ").length;
      };
      if (numWords(name) > 4) return true;
      return false;
    },
  },
  computed: {
    color() {
      if (this.type === "panini")
        return "background-color: var(--secondarybrown)";
      else if (this.type === "pizze")
        return "background-color: var(--pizzered)";
      else if (this.type === "fritti")
        return "background-color: var(--friedorange)";
      else return "background-color: var(--bereblue)";
    },
    nameScaled() {
      if (this.hasToScale(this.name)) return "font-size: 14px ";
      return "";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 547px;
  max-height: 58.5px;
  padding: 0.2rem 0.2rem;
  margin-top: 2rem;
  border: 1px solid white;
  border-radius: 30px 15px 15px 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}

.qty {
  background-color: var(--friedorange);
  color: white;
  font-family: "Lato", "sans-serif";
  font-weight: bold;
  font-size: 24px;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  font-family: "Montserrat", "sans-serif";
  font-size: 20px;
  color: var(--mainbrown);
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
}

.actions {
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  height: 100%;
  min-width: 82px;
  margin-right: 0.2rem;
  align-items: center;
  background-color: transparent;
  margin-left: auto;
}

.action {
  height: 90%;
  width: 90%;
  border: 1.2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-plus {
  background-color: var(--buttongreen);
  border-radius: 0px 15px 15px 0px;
}

.action-minus {
  background-color: var(--buttonorange);
  border-radius: 15px 0px 0px 15px;
}

.icon {
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  max-width: 24px;
  max-height: 24px;
}
</style>
