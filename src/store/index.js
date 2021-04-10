import { createStore } from 'vuex'
import tablesModule from "./tables/index"
import tableOrdersModule from "./table-orders/index"
import productsModule from "./products/index"
import takeawayModule from "./takeaways/index"

export default createStore({
  modules: {
    tables: tablesModule,
    orders: tableOrdersModule,
    products: productsModule,
    takeaways: takeawayModule
  }
})

/* TABLEs STORE
Store the list of actual-tables
actions can be performed to CRUD on tables and orders
*/