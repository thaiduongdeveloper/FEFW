<template>
  <header class="admin-header">
    <h1>Admin Panel</h1>
  </header>
</template>

<script>
export default {
  name: "AdminHeader",
};
</script>

<style scoped>
.admin-header {
  background: linear-gradient(135deg, #343a40, #212529);
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}
</style>
