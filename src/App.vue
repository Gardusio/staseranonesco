<template>
  <router-view></router-view>
</template>

<script>
</script>
<style>

:root {
  --mainbrown: #2D150B;
  --paperwhite: #FFF2E2;
  --secondarybrown: #623D22;
  --evidenceorange: #EFBE7D;
  --friedorange: #E1A85F;
  --takeawayred: #8F3822;
  --gray: #707070;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0
}

#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-y: visible;
  position: absolute; 
}

.left-section {
  background:rgba(98,61,34,0.12);
  width: 33%;
  height: 100%;
  position: fixed;
  padding: 2rem;
  top: 0;
  right: 0;
  overflow-y: scroll;
  box-shadow: 2px 9px 15px 6px var(--primarybrown);
}

.main-container {
  position: absolute;
  height: 100%;
  width: 58%;
  margin-left: 100px;
  margin-right: 33%;
}

</style>
