<template>
  <div class="category-quantities-container">
    <div class="category-line">
      <div class="category-name">Fritti: </div>
      <div class="category-quantity" style="background-color: var(--friedorange)"> {{qtyFritti}} </div>
    </div>
    <div class="category-line">
      <div class="category-name">Pizze: </div>
      <div class="category-quantity" style="background-color: var(--pizzered)"> {{qtyPizze}} </div>
    </div>
    <div class="category-line">
      <div class="category-name">Panini: </div>
      <div class="category-quantity" style="background-color: var(--secondarybrown)"> {{qtyPanini}} </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lineItemsAways"],
  computed: {
    qtyFritti() {
      return this.filterLineItemsByProductCategory("fritti").length;
    },
    qtyPanini() {
      return this.filterLineItemsByProductCategory("panini").length;
    },
    qtyPizze() {
    return this.filterLineItemsByProductCategory("pizze").length;
    },
  },
  methods: {
    filterLineItemsByProductCategory(category) {
      return this.lineItemsAways.filter(li => li.productCategory === category);
    }
  }
};
</script>

<style scoped>
.category-quantities-container {
  width: 15%;
  height: 100%;
}
.category-line {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.category-name {
  font-size: 24px;
}

.category-quantity {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
</style>
