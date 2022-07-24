import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import mainPage from '../views/mainPage.vue';
import AboutPage from '../views/AboutPage.vue';
import TabsPage from '../views/TabsPage.vue';
import AdminPage from '../views/AdminPage.vue';
import UserPage from '../views/UserPage.vue';

const routes= [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/main',
    name: 'main',
    component: mainPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabsPage
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
