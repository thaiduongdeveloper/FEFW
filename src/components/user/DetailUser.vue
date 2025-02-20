<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const detailUser = ref({});
const error = ref(null);

const fetchUser = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users/${route.params.id}`
    );
    detailUser.value = response.data;
  } catch (err) {
    error.value = "Lỗi khi Call API: " + err.message;
  }
};

onMounted(fetchUser);
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="text-primary fw-bold">👤 Thông tin chi tiết</h1>
      <router-link to="/users" class="btn btn-secondary btn-lg shadow"
        >⬅ Quay lại</router-link
      >
    </div>

    <!-- Hiển thị thông tin người dùng -->
    <div class="card shadow-sm p-4">
      <h2 class="text-success fw-bold">📌 ID: {{ detailUser.id }}</h2>
      <p><strong>📛 Tên:</strong> {{ detailUser.name }}</p>
      <p><strong>📧 Email:</strong> {{ detailUser.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 500px;
  margin: auto;
}
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
