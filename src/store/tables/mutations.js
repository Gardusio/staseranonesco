export default {
  addTable(state, table) {
    const compare = (t1, t2) => (t1.number < t2.number ? -1 : 1);
    state.tables.push(table);
    state.tables.sort(compare);
  },
  setTables(state, tables) {
    state.tables = tables;
  },
  setTableStatus(state, payload) {
    const t = state.tables.find((t) => t.id === payload.id);
    t.status = payload.status;
  },
  updateSeats(state, payload) {
    const t = state.tables.find((t) => t.id === payload.id);
    t.seats = payload.seats;
  },
  updateTableOrderId(state, payload) {
    const t = state.tables.find((t) => t.id === payload.tableId);
    t.orderId = payload.tableId;
    t.orderCreatedAt = new Date().toISOString();
  }
};
