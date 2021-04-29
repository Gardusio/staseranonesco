<template>
  <div class="container">
    <span class="title">{{ title }}</span>
    <span class="waiting">{{ wait }}</span>
  </div>
</template>

<script>
export default {
  props: ["title", "waiting"],
  data() {
    return {
      wait: this.waiting,
    };
  },
  watch: {
    waiting() {
      this.wait = this.waiting;
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  left: 9%;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Raleway", "sans-serif";
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--mainbrown);
  width: 66%;
}

.waiting {
  font-family: "Montserrat", "sans-serif";
  font-size: 1.25rem;
  margin-top: 0.5rem;
  color: var(--mainbrown);
}
</style>
