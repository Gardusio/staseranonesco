export default {
  addTable(context, table) {
    context.commit("addTable", table);
    //http
    //shouldUpdate
  },
  setTables(context) {
    //tables = http
    context.commit("setTables", context.rootGetters["tables/getTables"]);
  },
  setTableStatus(context, payload) {
    context.commit("setTableStatus", {
      id: payload.id,
      status: payload.newStatus,
    });
  },
};
