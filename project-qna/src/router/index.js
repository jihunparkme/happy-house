import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/list.vue";
import Create from '../views/create.vue';
import Read from '../views/read.vue';
import Delete from '../views/delete.vue';
import Update from '../views/update.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/qna.html",
    name: "list",
    component: List
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
  },
  {
    path: '/read',
    name: 'read',
    component: Read,
  },
  {
    path: '/delete',
    name: 'delete',
    component: Delete,
  },
  {
    path: '/update',
    name: 'update',
    component: Update,
  },
];

const router = new VueRouter({
  routes,
  mode : 'history'
});

export default router;
