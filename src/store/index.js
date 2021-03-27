import { createStore } from 'vuex'
import tablesModule from "./tables/index"
import tableOrdersModule from "./table-orders/index"
import productsModule from "./products/index"

export default createStore({
  modules: {
    tables: tablesModule,
    orders: tableOrdersModule,
    products: productsModule
  }
})

/* TABLEs STORE
Store the list of actual-tables
actions can be performed to CRUD on tables and orders
*/