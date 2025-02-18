<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const detailUser = ref({});
const loading = ref(true);
const error = ref(null);

const fetchUser = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users/${route.params.id}`
    );
    detailUser.value = response.data;
  } catch (err) {
    error.value = "Lỗi khi Call API: " + err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUser);
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="text-primary fw-bold">👤 Thông tin chi tiết</h1>
      <button
        class="btn btn-secondary btn-lg shadow"
        @click="router.push('/users')"
      >
        ⬅ Quay lại
      </button>
    </div>

    <!-- Trạng thái tải dữ liệu -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary" role="status"></div>
      <p>Đang tải dữ liệu...</p>
    </div>

    <!-- Hiển thị lỗi nếu có -->
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
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
