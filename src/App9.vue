<script setup>
import { ref } from "vue";

const number = ref(0);

// Hàm tăng giá trị của `number`
const myFunction = () => {
  number.value++;
};

const duongdz = ref(0);

// Sửa hàm để nhận tham số `amount`
const myFunc = (amount) => {
  duongdz.value += amount;
};

// Khai báo giá trị ban đầu
const initialValue = ref(0);
const currentValue = ref(initialValue.value);

// Hàm tăng
const tang = () => {
  currentValue.value++;
};

// Hàm giảm
const giam = () => {
  currentValue.value--;
};

// Hàm đặt lại giá trị
const reset = () => {
  currentValue.value = initialValue.value;
};

// Làm việc với form
const messeage = ref("");
const guiThongTin = () => {
  console.log("Gửi thông tin thành công");
  console.log(messeage.value);
};
</script>

<template>
  <button class="btn btn-success" @click="myFunction">
    Số lần bấm: {{ number }}
  </button>
  <br />

  <!-- Truyền tham số -->
  <button class="btn btn-primary" @click="myFunc(2)">Tăng thêm 2</button>
  <button class="btn btn-secondary" @click="myFunc(5)">Tăng thêm 5</button>
  <h1>Giá trị hiện tại là: {{ duongdz }}</h1>
  <br />

  <!--
    Tạo 1 giá trị cho trước
    Tạo 3 button tăng, giảm và đặt lại
    Khi ấn vào tăng thì sẽ tăng thêm 1 giá trị
    Khi ấn vào giảm thì sẽ giảm đi 1 giá trị
    Khi ấn vào đặt lại thì giá trị sẽ quay trở về ban đầu
    -->
  <!-- Các nút điều khiển giá trị -->
  <h2>Giá trị: {{ currentValue }}</h2>
  <button class="btn btn-primary" @click="tang">Tăng giá trị</button>
  <button class="btn btn-secondary" @click="giam">Giảm giá trị</button>
  <button class="btn btn-danger" @click="reset">Đặt lại giá trị</button>

  <!-- Làm việc với Form trong vue.js -->
  <form @submit.prevent="guiThongTin">
    <h1>Các thành phần trong form</h1>
    <!-- Text input -->
    <input
      type="text"
      class="form-control"
      placeholder="Nhập nội dung"
      v-model="messeage"
    />
    <button class="btn btn-success" type="submit">Submit</button>
  </form>

  <form action=""></form>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}
</style>
