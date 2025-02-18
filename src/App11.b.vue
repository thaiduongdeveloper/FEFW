<script setup>
import { ref, onMounted, onUpdated } from "vue";

const message = ref("");
onMounted(() => {
  console.log("được khởi tạo");
  message.value = "chào mừng";
});

const count = ref(0);
onUpdated(() => {
  console.log("đã được cập nhật, count = " + count.value);
});
</script>

<template>
  <h1>{{ message }}</h1>

  <button class="btn btn-success" @click="count++">Tăng: {{ count }}</button>
</template>
