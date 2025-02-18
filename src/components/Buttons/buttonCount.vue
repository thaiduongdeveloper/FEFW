<script setup>
import { ref } from "vue";

const count = ref(0);
const countFunc = () => {
  count.value++;
};
</script>

<template>
  <button class="btn btn-success" @click="countFunc">
    Bạn đã bấm vào {{ count }} lần
  </button>
</template>

<style scoped></style>
