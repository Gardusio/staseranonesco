<template>
  <small-modal @close="$emit('close')">
    <div class="container">
      <span class="title">Ordine {{ header }}</span>
      <div class="content-container">
        <span class="instructions"
          >Riapri l'ordine per aggiungere<span class="mark"> nuove comande</span
          >.</span
        >
        <span class="instructions evidence">Vuoi riaprire l'ordine?</span>
        <primary-button
          text="Apri!"
          @click="$emit('openOrder')"
        ></primary-button>
      </div>
    </div>
  </small-modal>
</template>

<script>
import SmallModal from "../../UI/layouts/modals/SmallModal.vue";
export default {
  components: {
    SmallModal,
  },
  props: ["header"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
}
.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-around;
}
.title {
  font-family: "Raleway", "sans-serif";
  font-weight: 600;
  font-size: 2rem;
  color: var(--mainbrown);
  letter-spacing: 1px;
  margin-top: 2rem;
  text-align: center;
}

.instructions {
  font-size: 1.25rem;
  color: var(--mainbrown);
  text-align: center;
  line-height: 1.5;
}

.evidence {
  font-weight: 600;
  color: var(--secondarybrown);
}

.mark {
  color: var(--evidenceorange);
  font-weight: 500;
  font-size: 1.5rem;
}
</style>
