import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/vote',
      name: 'vote',
      component: () => import('../views/VotePoll.vue'),
      meta: { requiresAuth: true }
    }, {
      path: '/lab1',
      name: 'lab 1',
      component: () => import('../components/Lab.vue')
    }, {
      path: '/lab2',
      name: 'lab 2',
      component: () => import('../components/chartConfig.ts')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access");
      next('/');
    }
  } else {
    next();
  }
});

export default router
