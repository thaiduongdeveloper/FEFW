import { createRouter, createWebHistory } from "vue-router";

// Import các component hiển thị nội dung
import Home from "../components/pages/home.vue";
import Contact from "../components/pages/contact.vue";
import Post from "../components/pages/post.vue";
import Product from "../components/pages/product.vue";
import ListUser from "../components/user/ListUser.vue";
import DetailUser from "../components/user/DetailUser.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/post", component: Post, name: "post" },
  { path: "/product", component: Product, name: "product" },
  { path: "/users", component: ListUser, name: "listUser" },
  { path: "/users/:id", component: DetailUser, name: "detailUser" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
