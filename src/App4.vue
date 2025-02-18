<script setup>
import { reactive } from "vue";

// làm việc với mảng đơn
const phones = reactive(["iphone", "xiaomi", "samsung", "oppo"]);

// làm việc với đối tượng
const student = reactive({
  hoTen: "Nguyễn Thái Dương",
  namSinh: 2005,
  queQuan: "Nghệ An",
});

const arrProduct = reactive([
  {
    id: 1,
    name: "điện thoại",
    price: 200000,
    stock: 10,
  },
  {
    id: 2,
    name: "máy tính",
    price: 2000000,
    stock: 0,
  },
]);
</script>

<template>
  <div class="container mt-4">
    <h3 class="mt-3">Danh sách điện thoại</h3>
    <ul class="list-group">
      <li v-for="(phone, index) in phones" :key="phone" class="list-group-item">
        {{ index + 1 }} {{ phone }}
      </li>
    </ul>
  </div>

  <!-- duyệt đối tượng -->
  <div class="container mt-4">
    <h3 class="mt-3">Thông tin SV</h3>
    <ul class="list-group">
      <li v-for="(value, key) in student" :key="key" class="list-group-item">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>

  <!-- duyệt mảng đối tượng -->
  <div class="container mt-4">
    <template v-for="product in arrProduct" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>Giá: {{ product.price }}</p>
      <p>Số lượng: {{ product.stock }}</p>
      <p>Trạng thái: {{ product.stock > 0 ? "còn hàng" : "hết hàng" }}</p>
    </template>
  </div>
</template>

<style scoped></style>
