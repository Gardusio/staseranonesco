<template>
  <router-view></router-view>
</template>

<script></script>
<style>
:root {
  --mainbrown: #2d150b;
  --paperwhite: #fff2e2;
  --secondarybrown: #623d22;
  --evidenceorange: #efbe7d;
  --friedorange: #e1a85f;
  --first-alert-red: #8f3822;
  --second-alert-red: rgb(255, 35, 35);
  --completed-green: rgba(125, 236, 117, 0.69);
  --gray: #777a7b;
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
  top: 0;
  right: 0;
  overflow-y: scroll;
  box-shadow: 2px 9px 15px 6px var(--primarybrown);
}

.main-container {
  position: absolute;
  height: 100%;
  width: 56%;
  margin-left: 100px;
  margin-right: 33%;
}
</style>
