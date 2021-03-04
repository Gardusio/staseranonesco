<template>
  <div class="container" >
    <div class="table-icon-container">
      <p :class="numberStyle">{{ number }}</p>
      <img class="table" src="../../../assets/table.png" />
    </div>
    <table-icon :status="status"></table-icon>
  </div>
</template>

<script>
import TableIcon from "./TableIcon";
export default {
  props: ["status", "number"],
  components: {
    TableIcon,
  },
  computed: {
      numberStyle() {
          if(this.status === "completed")
          return "number green";
          else
          return "number"
      }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
}

.table-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9.75rem;
  height: 7.5rem;
}

.table {
  margin-bottom: -11px;
  z-index: 10;
  width: 9rem;
  height: 7rem;
}

.number {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: #ccc;
  font-size: 72px;
  margin-right: 8px;
  text-shadow: 2px 3px 3px rgba(100, 100, 111, 0.2);
}
.green {
    color: rgba(125,236,117,0.69)
}
</style>