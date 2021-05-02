export default {
  addTable(context, table) {
    context.commit("addTable", {...table, id:parseInt(Math.random()*31)});
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
      status: payload.status,
    });
  },
  updateSeats(context, payload) {
    context.commit("updateSeats", payload);
  },
  saveOrder(context, payload) {
    //http : save new order,
    context.commit("setTableStatus", {
      id: payload.tableId,
      status: "waiting",
    });
    context.commit("updateTableOrderId", payload);
  },
};
