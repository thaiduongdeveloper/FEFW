<script setup>
import HeaderComponent from "@/components/blocks/header.vue";
import NavbarComponent from "@/components/blocks/navbar.vue";
import SidebarComponent from "@/components/blocks/sidebar.vue";
import FooterComponent from "@/components/blocks/footer.vue";
import ContentComponent from "@/components/blocks/content.vue";
</script>

<template>
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
          <!-- <router-view></router-view> -->
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
