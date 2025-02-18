<!--
 - component là một khối cho phps b chia nhỏ giao diện ng dùng thành
 các phần nhỏ, độc lập và có thể tái sử dụng
 -->
<script setup>
// import buttonCount from "@/components/buttons/buttonCount.vue";
import HeaderComponent from "@/components/blocks/header.vue";
import NavbarComponent from "@/components/blocks/navbar.vue";
import SidebarComponent from "@/components/blocks/sidebar.vue";
import FooterComponent from "@/components/blocks/footer.vue";
import ContentComponent from "@/components/blocks/content.vue";
</script>

<template>
  <!-- <h1>Học về Component</h1> -->
  <!-- Sử dụng Component -->
  <!-- <buttonCount /> -->
  <!-- Có thể tái sử dụng lại 1 component nhiều lần cho 1 trang -->
  <!-- <button-count></button-count> -->

  <!-- Xây dựng 1 layout admin có các thành phần:
   header, navbar, conten, footer(sử dụng component)
   Tích hợp sự dụng bootstrap có thể xây dựng -->
  <div class="container">
    <HeaderComponent />
    <NavbarComponent />
    <div class="mt-4">
      <div class="row">
        <div class="col-md-3">
          <SidebarComponent />
        </div>
        <div class="col-md-9">
          <ContentComponent />
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
