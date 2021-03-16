<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="190.954"
    height="40.371"
    viewBox="0 0 188.954 33.371"
  >
    <defs></defs>
    <g transform="matrix(1, 0, 0, 1, 0, 0)">
      <path
        id="Tracciato_27-2"
        data-name="Tracciato 27"
        d="M237.826,134.2c0,3.3-29.782,5.981-66.508,5.981S104.79,137.5,104.79,134.2s29.782-5.981,66.528-5.981S237.826,130.9,237.826,134.2Z"
        transform="translate(-75.79 -122.22)"
        :fill="shadowFill"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: ["status"],
  computed: {
    shadowFill() {
      if (this.status === "completed") return "rgba(125,236,117,0.69)";
      if (this.status === "waiting") return "rgb(225,168,95)";
      if (this.status === "first-alert") return "rgb(143,56,34)";
      if (this.status === "alert") return "rgb(255,35,35)";
      return "rgba(119, 122, 123, 0.2)";
    },
  },
};
</script>

<style scoped></style>
