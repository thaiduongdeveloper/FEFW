<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

const users = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    users.value = response.data;
  } catch (err) {
    error.value = "Lỗi khi Call API: " + err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUsers);
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="text-primary fw-bold">📋 Danh sách người dùng</h1>
      <button class="btn btn-success btn-lg shadow">Thêm</button>
    </div>

    <table class="table table-hover align-middle shadow-sm rounded">
      <thead class="table-primary">
        <tr>
          <th class="text-center">ID</th>
          <th>Tên</th>
          <th>Email</th>
          <th class="text-center">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="text-center">{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td class="text-center">
            <router-link
              :to="`/users/${user.id}`"
              class="btn btn-info btn-sm me-2"
              >Show</router-link
            >
            <button class="btn btn-outline-primary btn-sm me-2">Sửa</button>
            <button class="btn btn-outline-danger btn-sm">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
