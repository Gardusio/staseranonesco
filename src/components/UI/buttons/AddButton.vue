<template>
  <div class="circle-container">
    <font-awesome-icon :icon="addIcon" class="plus" size="lg">
    </font-awesome-icon>
  </div>
</template>

<script>
export default {
  props: ["icon"],
  computed: {
    addIcon() {
      if(this.icon ==="ta") return ['fas', 'layer-group']
      else if(this.icon ==="del") return ['fas', 'car']
      else return ['fas', 'plus'];
    }
  }
};
</script>

<style scoped>
.circle-container {
  display: flex;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: var(--mainbrown);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.plus {
  color: var(--backgroundactions);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>