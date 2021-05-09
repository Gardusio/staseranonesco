<template>
  <div class="background"></div>
  <router-view></router-view>
</template>

<style>
:root {
  --mainbrown: #2d150b;
  --paperwhite: #fff2e2;
  --secondarybrown: #623d22;
  --evidenceorange: #efbe7d;
  --friedorange: #e1a85f;
  --pizzered: #8f3822;
  --bereblue: #b0d8e5;
  --buttonorange: #db8442;
  --buttongreen: #82ce73;
  --alert-red: rgb(255, 35, 35);
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
  font-family: "Montserrat", sans-serif;
}

#app {
  height: 100vh;
  width: 100vw;
  overflow-y: visible;
  position: absolute;
}

.background {
  background: url("./assets/images/filterBackground.png"),
    url("./assets/images/background.png");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: -1000;
}

.left-section {
  background: rgba(98, 61, 34, 0.12);
  width: 33%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.main-container {
  position: relative;
  height: 100%;
  width: 60%;
  margin-left: 90px;
  margin-right: 33%;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(119, 122, 123, 0.4);
  display: flex;
  transition: opacity 0.3s ease;
  justify-content: center;
  align-items: center;
}

.modal-close-icon {
  color: #2d150b;
  cursor: pointer;
  position: absolute;
  top: 2;
  right: 20px;
}
</style>
