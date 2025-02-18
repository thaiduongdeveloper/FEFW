<template>
  <div class="list-group">
    <router-link to="/" class="list-group-item list-group-item-action active"
      >Dashboard</router-link
    >
    <router-link to="/users" class="list-group-item list-group-item-action"
      >Users</router-link
    >
    <router-link to="/settings" class="list-group-item list-group-item-action"
      >Settings</router-link
    >
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
};
</script>

<style scoped>
.list-group {
  margin-top: 10px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.list-group-item {
  font-size: 1.1rem;
  transition: background 0.3s ease-in-out;
}
.list-group-item:hover {
  background: #e9ecef;
}
.list-group-item.active {
  background: #007bff;
  color: white;
  font-weight: bold;
}
</style>
