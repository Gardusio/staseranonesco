<template>
  <big-modal @close="$emit('close')">
    <div class="container">
      <span class="new">Nuova Consegna</span>
      <form class="form-container" @submit.prevent="saveDelivery">
        <input
          v-model="name"
          type="text"
          placeholder="Nome"
          required
          class="entry"
        />

        <input
          v-model="street"
          id="s"
          type="text"
          class="entry"
          placeholder="Via"
          required
        />

        <label for="c" class="label">N°</label>
        <input
          v-model="civic"
          id="c"
          type="number"
          class="entry hour"
          required
        />

        <div class="hours">
          <div class="hour-container">
            <label for="h" class="label">Ore</label>
            <input
              v-model="hour"
              id="h"
              type="number"
              class="entry hour"
              required
            />
          </div>
          <div class="hour-container">
            <label for="m" class="label">Minuti</label>
            <input
              v-model="minutes"
              id="m"
              type="number"
              class="entry hour"
              required
            />
          </div>
        </div>
        <input
          v-model="phone"
          type="tel"
          class="entry"
          placeholder="389 48 31 579"
          required
        />
        <primary-button class="continue" text="Continua"></primary-button>
      </form>
    </div>
  </big-modal>
</template>

<script>
import BigModal from "../UI/layouts/modals/BigModal";
export default {
  components: {
    BigModal,
  },
  data() {
    return {
      name: "",
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
      phone: null,
      street: "",
      civic: 1,
    };
  },
  methods: {
    saveDelivery() {
      const newDel = {
        id: null,
        name: this.name,
        hour: new Date(new Date().setHours(this.hour, this.minutes, 0, 0)),
        street: this.street,
        civic: this.civic,
        phone: this.phone,
        completed: false,
        lastUpdate: new Date(),
        createdAt: new Date(),
        total: 0,
        lineItems: [],
        quantityState: [
          {
            category: "fritti",
            qty: 0,
          },
          {
            category: "pizze",
            qty: 0,
          },
          {
            category: "panini",
            qty: 0,
          },
        ],
      };
      this.$store
        .dispatch("deliveries/saveNewDel", {
          del: newDel,
        })
        .then((r) => this.$router.push("/update-del/" + r.id));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.new {
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--mainbrown);
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
}

.label {
  font-family: inherit;
  color: rgba(98, 61, 34, 45%);
  font-size: 1rem;
}
.hours {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.street {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.entry {
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  color: var(--mainbrown);
  display: block;
  margin-bottom: 2rem;
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #ccc;
}
.via {
  width: 66%;
}
.hour {
  width: 33%;
}

.hour-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.continue {
  margin-top: 1rem;
}
</style>
