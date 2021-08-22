export default {
  shouldUpdate(state) {
    return state.shouldUpdate;
  },
  getTables(state) {
    return state.tables;
  },
  getTable(state, index) {
    console.log("inside srtrange getter: ", index);
    return state.tables.filter(t => t.id === index);
  }
};
