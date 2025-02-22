<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const error = ref(null);
const validationErrors = ref({
  name: "",
  email: "",
});

const newUser = ref({
  name: "",
  email: "",
});

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = () => {
  validationErrors.value = { name: "", email: "" }; // Reset lỗi

  let isValid = true;
  if (!newUser.value.name.trim()) {
    validationErrors.value.name = "Họ tên không được để trống.";
    isValid = false;
  }
  if (!newUser.value.email.trim()) {
    validationErrors.value.email = "Email không được để trống.";
    isValid = false;
  } else if (!isValidEmail(newUser.value.email)) {
    validationErrors.value.email = "Email không đúng định dạng.";
    isValid = false;
  }

  return isValid;
};

const createUser = async () => {
  if (!validateForm()) return;

  try {
    await axios.post("http://localhost:3000/users", newUser.value);
    alert("🎉 Thêm người dùng thành công!");
    router.push("/users");
  } catch (err) {
    error.value = "Lỗi khi thêm người dùng: " + err.message;
  }
};
</script>

<template>
  <div class="container">
    <h1 class="text-primary fw-bold">📝 Thêm người dùng</h1>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <form @submit.prevent="createUser" class="shadow p-4 bg-white rounded">
      <div class="mb-3">
        <label class="form-label fw-semibold">Họ tên</label>
        <input
          v-model="newUser.name"
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
          v-model="newUser.email"
          type="text"
          class="form-control"
          placeholder="Nhập email"
        />
        <div v-if="validationErrors.email" class="text-danger">
          {{ validationErrors.email }}
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <router-link to="/users" class="btn btn-outline-secondary px-4 py-2">
          ⬅ Quay lại
        </router-link>
        <button type="submit" class="btn btn-success px-4 py-2">
          Thêm người dùng
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
