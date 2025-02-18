<!-- Lab2:
  Hiển thị danh sách sản phẩm.
  Mỗi sản phẩm bao gồm: hình ảnh, tên, mã sản phẩm và giá
-->
<script setup>
import { reactive } from "vue";

// Product data
const products = reactive([
  {
    id: 1,
    name: "iPhone 13 Pro",
    code: "IP13P",
    price: 200000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHL0hn-UJcIBN97thOsr9m3xJOkQx6L5yHJg&s",
  },
  {
    id: 2,
    name: "iPhone 16 Pro Max",
    code: "IP16PM",
    price: 500000,
    img: "https://cdn-v2.didongviet.vn/files/products/2024/8/10/1/1725964321138_2_iphone_16_pro_sa_mac_didongviet.jpg",
  },
]);
</script>

<template>
  <div class="product-list">
    <h2 class="title">Danh Sách Điện Thoại</h2>
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.img" :alt="product.name" class="product-image" />
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-code">Mã sản phẩm: {{ product.code }}</p>
        <p class="product-price">
          Giá: {{ product.price.toLocaleString() }} VND
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-card {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.product-code,
.product-price {
  margin: 5px 0;
  color: #555;
}
</style>
