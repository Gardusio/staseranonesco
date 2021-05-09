<template>
  <div class="notification-open-footer">
    <p class="delete-notification-text" @click="$emit('delete')">
      Elimina notifica
    </p>
    <p class="notification-createdAt-date">
      creata alle {{ notificationCreatedAt }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["createdAt"],
  computed: {
    notificationCreatedAt() {
      const date = new Date(this.createdAt);
      const h = date.getHours();
      const m = date.getMinutes();
      return `${h}.${m}`;
    },
  },
};
</script>

<style scoped>
.notification-open-footer {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
}

.delete-notification-text {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: black;
}

.notification-createdAt-date {
  font-weight: 400;
  font-size: 12px;
  color: var(--mainbrown);
}
</style>
