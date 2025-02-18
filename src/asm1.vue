<script setup>
import { reactive, ref } from "vue";

const student = ref({
  hoTen: "Nguyen Thai Duong",
  age: 15,
  lopHoc: "L303",
  GPA: 9.0,
});

const lopHocs = reactive([
  {
    id: 1,
    name: "Nguyen Thai Duong",
    tuoi: 15,
    gpa: 9.0,
  },
  {
    id: 2,
    name: "Nguyen Thai Son",
    tuoi: 20,
    gpa: 4.0,
  },
]);

function show(lopHoc) {
  alert(`Thong Tin: ho ten: ${lopHoc.name} GPA: ${lopHoc.gpa}`);
}

function namSinh() {
  const namHientai = new Date().getFullYear();
  const namSinh = namHientai - student.value.age;
  alert(`Tuổi: ${namSinh}`);
}
</script>

<template>
  <div class="student-info">
    <h2>Thông Tin Sinh Viên</h2>
    <p><strong>Họ Tên:</strong> {{ student.hoTen }}</p>
    <input type="text" v-model="student.hoTen" placeholder="Nhập họ tên" />
    <p><strong>Tuổi:</strong> {{ student.age }}</p>
    <p><strong>Lớp Học:</strong> {{ student.lopHoc }}</p>
    <p><strong>GPA:</strong> {{ student.GPA }}</p>
    <button @click="namSinh">Tính Năm Sinh</button>
  </div>

  <div class="container">
    <h2>Danh Sách Sinh Viên</h2>
    <div v-for="lopHoc in lopHocs" :key="lopHoc.id" class="student-card">
      <p><strong>Họ Tên:</strong> {{ lopHoc.name }}</p>
      <p><strong>Tuổi:</strong> {{ lopHoc.tuoi }}</p>
      <p><strong>GPA:</strong> {{ lopHoc.gpa }}</p>
      <button @click="show(lopHoc)">Hiển Thị Thông Tin</button>
    </div>
  </div>
</template>

<style scoped>
.student-info {
  padding: 16px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
}

.container {
  padding: 16px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.student-card {
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
