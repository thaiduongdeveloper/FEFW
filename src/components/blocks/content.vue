<template>
  <div class="container mt-3">
    <div class="row">
      <!-- Sidebar, có thể bật lại khi cần -->
      <!-- <div class="col-md-3">
        <SidebarMenu />
      </div> -->

      <div class="mx-auto content-box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentLayout",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.content-box {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
