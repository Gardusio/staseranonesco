export default {
  addTable(state, table) {
    //sorted insert
    state.tables.push(table);
  },
  setTables(state, tables) {
    state.tables = tables;
  },
  setTableStatus(state, payload) {
    state.tables.map((t) => {
      if (t.id === payload.tableId) t.status = status;
    });
  },
  updateSeats(state, payload) {
    const t = state.tables.find(t => t.id === payload.id)
    t.seats = payload.seats;
  }
};
