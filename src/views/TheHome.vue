<template>
  <the-background></the-background>
  <div class="flex-container">
    <div class="home-date-container">
      <p class="home-date-container__date">{{ date }}</p>
      <div class="home-date-container__hours">{{ hours }}</div>
    </div>
    <section class="main">
      <div class="home-links">
        <div>
          <button
            @click="sala"
            class="home-links-shared home-links__restaurant"
          >
            <a class="home-links__restaurant__header">Ristorante</a>
          </button>
          <p class="home-links__restaurant-bottom-text">
            Accedi al servizio di giornata
          </p>
        </div>
        <div>
          <button class="home-links-shared home-links__reports">
            <a href="/" class="home-links__reports__header">Vendite</a>
          </button>
          <p class="home-links__reports-bottom-text">
            Accedi ai reports del mese
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    sala() {
      this.$router.push("/sala");
    },
  },
  computed: {
    date() {
      const current = new Date().toLocaleString("it-IT", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      const dateString = current.toString();
      return dateString.charAt(0).toUpperCase() + dateString.slice(1);
    },
    hours() {
      const current = new Date();
      return current.getHours() + "." + current.getMinutes();
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 0;
}
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin-top: 5rem;
}

.home-date-container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #623d22;
}

.home-date-container__date {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: 2px;
}

.home-date-container__hours {
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: 4rem;
}

.home-links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

.home-links-shared {
  height: 17.95rem;
  width: 19.37rem;
  border-radius: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: all linear 2ms;
}

.home-links__restaurant {
  background: url("../assets/images/restaurantBackground.png"),
    linear-gradient(180deg, rgb(220, 200, 200) -90%, #623d22 80%);
  background-size: cover;
  border: 1px solid #2d150b;
  box-shadow: 0 6px 6px rgba(45, 21, 11, 0.8);
  /*box-shadow:  0 5.4px 4.4px rgba(45, 21, 11, 0.034),
    0 13.4px 10.6px rgba(45, 21, 11, 0.048),
    0 12.5px 10px rgba(45, 21, 11, 0.06),
    0 22.3px 17.9px rgba(45, 21, 11, 0.072),
    0 41.8px 33.4px rgba(45, 21, 11, 0.086),
    0 200px 160px rgba(45, 21, 11, 0.12)
    */
}

.home-links__restaurant:active,
.home-links__reports:active {
  box-shadow: 0 2px 2px;
}

.home-links__reports {
  background: url("../assets/images/reportsBackground.png") center/contain;
  border: 1px solid #b68149;
  box-shadow: 0 5px 5px #b68149;
  z-index: 1;
}

.home-links__restaurant__header {
  text-decoration: none;
  margin-top: 1.4rem;
  color: whitesmoke;
  font-size: 2rem;
}

.home-links__reports__header {
  text-decoration: none;
  margin-top: 1.4rem;
  color: #bc8c5a;
  font-size: 2rem;
}

.home-links__restaurant-bottom-text {
  color: #66574e;
  font-size: 1.18rem;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 0.8rem;
  font-family: "Raleway", sans-serif;
}

.home-links__reports-bottom-text {
  color: #bc8c5a;
  font-size: 1.18rem;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 0.8rem;
  font-family: "Raleway", sans-serif;
}
</style>