<template>
  <router-view></router-view>
</template>

<script>
</script>

<style>
:root {
  --mainbrown: #2d150b;
  --paperwhite: #fff2e2;
  --secondarybrown: #623d22;
  --evidenceorange: #efbe7d;
  --friedorange: #e1a85f;
  --buttonorange: #db8442;
  --buttongreen: #82ce73;
  --first-alert-red: #8f3822;
  --second-alert-red: rgb(255, 35, 35);
  --completed-green: rgba(125, 236, 117, 0.69);
  --gray: #777a7b;
  --backgroundgray: #e9e6e2;
  --backgroundactions: #eae2d8;
  --takeawaysgreen: #6a8d73;
  --deliveryorange: #b68149;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  overflow-y: visible;
  position: absolute;
}

.left-section {
  background: rgba(98, 61, 34, 0.12);
  width: 35%;
  height: 100%;
  position: fixed;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  overflow-y: scroll;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.main-container {
  position: relative;
  height: 100%;
  width: 58%;
  margin-left: 7%;
  margin-right: 33%;
}
</style>
