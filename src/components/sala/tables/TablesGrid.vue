<template>
  <div class="grid-container">
    <table-item
      v-for="table in tables"
      :key="table.id"
      :table="table"
      @click="toTable(table)"
    />
  </div>
</template>

<script>
import TableItem from "./Table.vue";

export default {
  components: { TableItem },
  data() {
    return {
      tables: [],
    };
  },
  created() {
    //load Tables
    //this.$store.dispatch("tables/setTables");
    this.tables = this.$store.getters["tables/getTables"];
  },
  computed: {
   
  },
  methods: {
    toTable(table) {
      if (table.status === "free")
        this.$router.push(`/empty-table/${table.id}`);
      else this.$router.push(`/table-order/${table.id}`);
    },


  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3%;
  margin-left: 13%;
  margin-right: 41%;
  width: 50%;
  row-gap: 2.5rem;
  column-gap: 6rem;
  grid-auto-flow: dense;
}
</style>
