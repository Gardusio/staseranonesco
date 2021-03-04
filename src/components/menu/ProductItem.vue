<template>
  <div class="item-container">
    <img class="circle-image" src="../../assets/images/frittiCategoria.jpg" />
    <span class="title">{{ productName }} </span>
  </div>
</template>

<script>
export default {
  props: ["productName"],
};
</script>


<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circle-image {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  border: 1px solid #efd3ae;
  box-shadow: 1px 1px 1px 1px #3f2c1c;
  transition: all linear 2ms;
}

.title {
  font-family: "Montserrat";
  font-size: 1.8rem;
  font-weight: 300;
  color: #2d150b;
  margin-top: 0.5rem;
}
</style>