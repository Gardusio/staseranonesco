<template>
  <p class="day">{{ dayOfWeek }}<br />{{ day }}</p>
</template>

<script>
export default {
  data() {
    return {
      days: [
        "Lunedi",
        "Martedi",
        "Mercoledi",
        "Giovedi",
        "Venerdi",
        "Sabato",
        "Domenica",
      ],
       months: [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ],
    };
  },
  computed: {
    dayOfWeek() {
      return this.days[new Date().getDay()];
    },
    day() {
      const date = new Date();
      return (
        date.getDate() + " " + this.months[date.getMonth()]
      );
    },
  },
};
</script>

<style scoped>
.day {
  color: var(--secondarybrown);
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-align: right;
}
</style>