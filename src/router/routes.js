const routes = [
  {
    path: '/',
    component: () => import('/@/views/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('/@/views/About.vue'),
  },
  {
    path: '/table',
    component: () => import('/@/views/Table.vue'),
  }
]

export default routes
