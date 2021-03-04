<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="190.954"
      height="40.371"
      viewBox="0 0 188.954 33.371"
    >
      <defs>
        <filter
          id="table-shadow-filter"
          x="0"
          y="0"
          width="188.954"
          height="33.371"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="6" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        transform="matrix(1, 0, 0, 1, 0, 0)"
        filter="url(#table-shadow-filter)"
      >
        <path
          id="table-shadow"
          d="M275.744,135.906c0,4.238-38.271,7.686-85.464,7.686s-85.49-3.448-85.49-7.686,38.271-7.686,85.49-7.686S275.744,131.668,275.744,135.906Z"
          transform="translate(-95.79 -125.22)"
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
      if (this.status === "completed") {
        return "rgba(125,236,117,0.69)";
      } else return "#ccc";
    },
  },
};
</script>

<style scoped>
</style>