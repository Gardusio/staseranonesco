<template>
  <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
    <div class="item-container" @click="productSelected(product)">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ product.name }} </span>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    productSelected() {
      this.$emit("product-selected", this.product);
    }
  }
};
</script>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:auto;
}
.circle-image {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px #3f2c1c;
  transition: all linear 2ms;
}

.title {
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--mainbrown);
  margin-top: 0.7rem;
}
</style>