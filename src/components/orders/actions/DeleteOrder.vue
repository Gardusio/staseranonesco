<template>
  <small-modal @close="$emit('close')">
    <div class="container">
      <span class="title">Elimina Ordine</span>
      <div class="content-container">
        <span class="instructions">
          <span style="font-weight: 600"> Attento</span> tutte le righe d'ordine
          verranno cancellate!
        </span>
        <span class="instructions evidence">{{ instructionsEvidence }}</span>
        <primary-button
          class="alert"
          text="Elimina ordine"
          @click="$emit('deleteOrder')"
        />
      </div>
    </div>
  </small-modal>
</template>

<script>
import SmallModal from "../../UI/layouts/modals/SmallModal";
export default {
  components: {
    SmallModal,
  },
  props: ["header", "instructionsEvidence"],
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
  color: firebrick;
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
  color: var(--mainbrown);
}

.mark {
  color: var(--evidenceorange);
  font-weight: 500;
  font-size: 1.5rem;
}

.alert {
  background: firebrick;
}
</style>
