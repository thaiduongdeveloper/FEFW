<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const error = ref(null);
const editUser = ref({});

const fetchUser = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users/${route.params.id}`
    );
    editUser.value = response.data;
  } catch (err) {
    error.value = "Lỗi khi Call API: " + err.message;
  }
};

onMounted(fetchUser);

const updateUser = async () => {
  try {
    await axios.put(
      `http://localhost:3000/users/${route.params.id}`,
      editUser.value
    );
    alert("🎉 Cập nhật thành công!");
    router.push("/users");
  } catch (err) {
    error.value = "Lỗi khi thêm người dùng: " + err.message;
  }
};
</script>
<template>
  <div class="container">
    <h1 class="text-primary fw-bold">✏️ Chỉnh sửa người dùng</h1>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <form @submit.prevent="updateUser" class="shadow p-4 bg-white rounded">
      <div class="mb-3">
        <label class="form-label fw-semibold">Họ tên</label>
        <input
          v-model="editUser.name"
          type="text"
          class="form-control"
          placeholder="Nhập họ tên"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Email</label>
        <input
          v-model="editUser.email"
          type="email"
          class="form-control"
          placeholder="Nhập email"
          required
        />
      </div>

      <!-- Căn chỉnh các nút bằng flex -->
      <div class="d-flex justify-content-between">
        <router-link to="/users" class="btn btn-outline-secondary px-4 py-2">
          ⬅ Quay lại
        </router-link>
        <button type="submit" class="btn btn-primary px-4 py-2">
          Cập nhật
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
}

form {
  border-radius: 12px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
