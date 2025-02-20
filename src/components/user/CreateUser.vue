<script setup>
import { ref } from "vue";

const newUser = ref({
  name: "",
  email: "",
});
</script>
<template>
  <div class="container">
    <h1 class="text-primary fw-bold">📝 Thêm người dùng</h1>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <form @submit.prevent="createUser" class="shadow p-4 bg-white rounded">
      <div class="mb-3">
        <label class="form-label">Họ tên</label>
        <input
          v-model="newUser.name"
          type="text"
          class="form-control"
          placeholder="Nhập họ tên"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          v-model="newUser.email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
        />
      </div>
      <router-link to="/users" class="btn btn-secondary"
        >⬅ Quay lại</router-link
      >
      <button type="submit" class="btn btn-success" :disabled="loading">
        {{ loading ? "Đang thêm..." : "Thêm người dùng" }}
      </button>
    </form>
  </div>
</template>
<style scoped></style>
