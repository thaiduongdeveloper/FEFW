<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Admin Panel</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/post">Post</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product">Product</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminNavbar",
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}
.nav-link {
  font-size: 1.1rem;
  transition: color 0.3s ease-in-out;
}
.nav-link:hover {
  color: #f8f9fa !important;
}
</style>
