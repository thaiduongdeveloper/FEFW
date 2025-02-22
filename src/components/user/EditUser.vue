<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const error = ref(null);
const validationErrors = ref({
  name: "",
  email: "",
});
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

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = () => {
  validationErrors.value = { name: "", email: "" };

  let isValid = true;
  if (!editUser.value.name.trim()) {
    validationErrors.value.name = "Họ tên không được để trống.";
    isValid = false;
  }
  if (!editUser.value.email.trim()) {
    validationErrors.value.email = "Email không được để trống.";
    isValid = false;
  } else if (!isValidEmail(editUser.value.email)) {
    validationErrors.value.email = "Email không đúng định dạng.";
    isValid = false;
  }

  return isValid;
};

const updateUser = async () => {
  if (!validateForm()) return;

  try {
    await axios.put(
      `http://localhost:3000/users/${route.params.id}`,
      editUser.value
    );
    alert("🎉 Cập nhật thành công!");
    router.push("/users");
  } catch (err) {
    error.value = "Lỗi khi cập nhật người dùng: " + err.message;
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
        />
        <div v-if="validationErrors.name" class="text-danger">
          {{ validationErrors.name }}
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label fw-semibold">Email</label>
        <input
          v-model="editUser.email"
          type="text"
          class="form-control"
          placeholder="Nhập email"
        />
        <div v-if="validationErrors.email" class="text-danger">
          {{ validationErrors.email }}
        </div>
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

.text-danger {
  font-size: 14px;
  margin-top: 5px;
}
</style>
