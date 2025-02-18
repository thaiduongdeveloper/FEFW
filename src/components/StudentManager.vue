<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const students = ref([]);
const newStudent = ref({ name: "", age: "" });
const editStudent = ref(null);
const apiUrl = "http://localhost:3000/students";

// Lấy danh sách sinh viên từ JSON Server
const fetchStudents = async () => {
  try {
    const response = await axios.get(apiUrl);
    students.value = response.data;
  } catch (error) {
    console.error("Lỗi lấy dữ liệu:", error);
  }
};

// Thêm sinh viên mới
const addStudent = async () => {
  if (!newStudent.value.name || !newStudent.value.age) return;
  try {
    const response = await axios.post(apiUrl, newStudent.value);
    students.value.push(response.data);
    newStudent.value = { name: "", age: "" };
  } catch (error) {
    console.error("Lỗi thêm sinh viên:", error);
  }
};

// Xoá sinh viên
const deleteStudent = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    students.value = students.value.filter(student => student.id !== id);
  } catch (error) {
    console.error("Lỗi xoá sinh viên:", error);
  }
};

// Chỉnh sửa sinh viên
const startEdit = (student) => {
  editStudent.value = { ...student };
};

const updateStudent = async () => {
  if (!editStudent.value) return;
  try {
    await axios.put(`${apiUrl}/${editStudent.value.id}`, editStudent.value);
    const index = students.value.findIndex(s => s.id === editStudent.value.id);
    if (index !== -1) {
      students.value[index] = { ...editStudent.value };
    }
    editStudent.value = null;
  } catch (error) {
    console.error("Lỗi cập nhật sinh viên:", error);
  }
};

onMounted(fetchStudents);
</script>

<template>
  <div class="container">
    <h2>Quản Lý Sinh Viên</h2>

    <!-- Form Thêm Sinh Viên -->
    <div class="form">
      <input v-model="newStudent.name" placeholder="Tên sinh viên" />
      <input v-model="newStudent.age" type="number" placeholder="Tuổi" />
      <button @click="addStudent">Thêm</button>
    </div>

    <!-- Danh sách sinh viên -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>
            <button @click="startEdit(student)">Sửa</button>
            <button @click="deleteStudent(student.id)">Xoá</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Form Sửa Sinh Viên -->
    <div v-if="editStudent" class="edit-form">
      <h3>Chỉnh sửa sinh viên</h3>
      <input v-model="editStudent.name" placeholder="Tên sinh viên" />
      <input v-model="editStudent.age" type="number" placeholder="Tuổi" />
      <button @click="updateStudent">Cập nhật</button>
      <button @click="editStudent = null">Hủy</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
button {
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
