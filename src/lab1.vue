<!-- Lab 1:
Khai báo một đối tượng sinh viên: hoTen, namSinh, lopHoc, diemGPA
- Hiển thị toàn bộ thông tin sinh viên ra màn hình
- Tạo 1 ô input để thay đổi thông tin họ tên của sinh viên
- Tạo 1 button, khi click sẽ hiển thị điểm GPA của sinh viên dưới dạng popup
- Tạo 1 button, khi click sẽ tính tuổi của sinh viên và hiển thị tuổi của sinh viên dưới dạng popup -->
<script setup>
import { reactive } from 'vue';

const student = reactive({
  hoTen: 'Nguyễn Thái Dương',
  namSinh: 2005,
  lopHoc: 'L303',
  diemGPA: 9.0,
});

function showGPA() {
  alert(`Điểm GPA: ${student.diemGPA}`);
}

function showAge() {
  const namHientai = new Date().getFullYear();
  const age = namHientai - student.namSinh;
  alert(`Tuổi: ${age}`);
}
</script>

<template>
  <div class="student-info">
    <h2>Thông tin sinh viên</h2>
    <p><strong>Họ tên:</strong> {{ student.hoTen }}</p>
    <input type="text" v-model="student.hoTen" class="form-control" />

    <p><strong>Năm sinh:</strong> {{ student.namSinh }}</p>
    <p><strong>Lớp học:</strong> {{ student.lopHoc }}</p>
    <p><strong>Điểm GPA:</strong> {{ student.diemGPA }}</p>

    <button @click="showGPA" class="btn btn-info">Hiển thị điểm GPA</button>
    <button @click="showAge" class="btn btn-warning">Tính tuổi</button>
  </div>
</template>

<style scoped>
.student-info {
  max-width: 400px;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  margin-bottom: 15px;
}

.form-control {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 8px 12px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;
}

.btn-info {
  background-color: #17a2b8;
}

.btn-warning {
  background-color: #ffc107;
}
</style>
