import { createStore } from 'vuex'
import tablesModule from "./tables/index"
import ordersModule from "./table-orders/index"

export default createStore({
  modules: {
    tables: tablesModule,
    orders: ordersModule,
  }
})

/* TABLEs STORE
Store the list of actual-tables
actions can be performed to CRUD on tables and orders
*/