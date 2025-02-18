<!--
    DATA BINDING TRONG VUE (RÀNG BUỘC DỮ LIỆU TRONG VUE)

    - Là một trong những kiến thức quan trọng nhất
    - Cho phép thiết lập mối quan hệ hai chiều giữa model (logic) và giao diện (HTML)
    - Giúp giao diện tự động thay đổi khi dữ liệu thay đổi và ngược lại

    *** DATA BINDING có hai loại:
    - Binding 1 chiều:
    - Binding 2 chiều:
-->
<script setup>
import { reactive, ref } from 'vue';

// Binding 1 chiều:
// - Binding nội suy
const fullName = ref("Dương");

// - Binding thuộc tính:
// Cú pháp: <element v-bind:attribute="dataValue"></element>
// Rút gọn: <element :attribute="dataValue"></element>
const imageUrl = ref("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWGO7CPGVTxoMyrJFeXe4iC89QZTClrp1pw&s");

// - Binding sự kiện:
function changeFullName() {
  fullName.value = "Nguyễn Thái Dương";
}

function changeImageUrl() {
  imageUrl.value = "https://fado.vn/blog/wp-content/uploads/2024/01/cap-dang-anh-tet-jpg.webp";
}

// Binding hai chiều
// Sử dụng v-model để đồng bộ dữ liệu 2 chiều
const queQuan = ref("Nghệ An");

// Directive trong VUE
// - Là những thuộc tính đặc biệt bắt đầu bằng v- được thêm vào các thẻ HTML
// - Mỗi Directive cung cấp một tính năng tương ứng
// - Còn một có các Directive: v-if, v-for, v-on,...


const activeClass = ref("active")
const textSuccessClass = ref("text-success")

const styleObject = reactive({
  backgroundColor: "green",
  color: "white",
  margin: "10px",
})
</script>

<template>
  <div class="text-center">
    <!-- Binding nội suy -->
    <h1>{{ fullName }}</h1>

    <!-- Binding sự kiện -->
    <button @click="changeFullName" class="btn btn-success">Đổi tên</button>
    <div class="mt-3">

      <!-- Binding thuộc tính -->
      <img :src="imageUrl" alt="Tết" class="img-fluid rounded" />
    </div>
    <button @click="changeImageUrl" class="btn btn-success mt-2">Đổi ảnh</button>

    <!-- Binding hai chiều -->
    <h1>{{ queQuan }}</h1>
    <input type="text" v-model="queQuan">

    <h1 v-bind:class="'active'">{{ fullName }}</h1>

    <h1 v-bind:class="[activeClass, textSuccessClass]">{{ fullName }}</h1>

    <h1 v-bind:style="styleObject">{{ fullName }}</h1>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
.btn {
  margin: 0.5rem;
}
img {
  max-width: 100%;
  height: auto;
}
.active{
  background-color: red;
  color: white;
  margin: 10px;
}

.text-success{
  color: green;
}
</style>
