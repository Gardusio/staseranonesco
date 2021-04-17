<template>
  <the-background></the-background>
  <the-sidebar activeElem="orders"></the-sidebar>
  <section class="main">
    <all-orders-header></all-orders-header>
    <section class="orders">
      <div class="type-container ta">
        <div class="icon"></div>
        <ul class="orders-list">
          <order-card
            headerTitle="Laurenzi"
            :hour="{
              hours: new Date().getHours(),
              minutes: new Date().getMinutes(),
            }"
            alert="alert"
            orderType="ta"
          ></order-card>
        </ul>
      </div>
      <div class="type-container del">
        <div class="icon"></div>
        <ul class="orders-list">
          <order-card
            headerTitle="Laurenzi"
            :hour="{
              hours: new Date().getHours(),
              minutes: new Date().getMinutes(),
            }"
            alert="alert"
            orderType="del"
          ></order-card>
        </ul>
      </div>
      <div class="type-container tables">
        <div class="icon"></div>
        <ul class="orders-list">
          <order-card
            headerTitle="Laurenzi"
            :hour="{
              hours: new Date().getHours(),
              minutes: new Date().getMinutes(),
            }"
            alert="alert"
            orderType="table"
          ></order-card>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import AllOrdersHeader from "../components/all/AllOrdersHeader";
import OrderCard from "../components/UI/layouts/OrdersCard";
export default {
  components: { AllOrdersHeader, OrderCard },
};
</script>

<style scoped>
.main {
  margin-left: 90px;
  height: 100%;
  overflow: hidden;
}

.orders {
  display: flex;
  justify-content: space-evenly;
  height: calc(80% - 1px);
}

.type-container {
  background-color: white;
  margin-top: 4%;
  width: 30%;
  overflow-y: scroll;
  border-radius: 24px;
  border: none;
}

.orders-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
  padding-bottom: 1rem;
}

.ta {
  background-color: rgba(106, 141, 115, 0.09);
}
.del {
  background-color: rgba(182, 129, 73, 0.09);
}

.tables {
  background-color: rgba(45, 21, 11, 0.09);
}
</style>
