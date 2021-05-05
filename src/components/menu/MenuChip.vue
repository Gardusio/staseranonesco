<template>
<div class="chip" :class="active">
    {{ chip }}
</div>
</template>

<script>
export default {
    props:["chip", "active"],
};
</script>

<style scoped>
.chip {
  padding: 0.5rem;
  border-bottom: 2px solid var(--mainbrown);
  font-size: 1rem;
  font-weight: 500;
  color: var(--mainbrown);
  font-family: "Raleway", "sans-serif";
  transition: all 0.2s ease-in-out;
}

.active {
  padding: 0.5rem;
  font-size: 1.5rem;
  color: var(--mainbrown);
  font-weight: bold;
  font-family: "Raleway", "sans-serif";
  border-bottom: 4px solid var(--evidenceorange);
  transition: all 0.2s ease-in-out;
}
</style>
