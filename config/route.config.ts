import Route from '@/common/types/route';
import Dashbaord from './routes/dashboard';

const routes: Array<Route> = [
  {
    path: '/login',
    component: '@/pages/login',
  },
  {
    path: '/',
    component: '../layouts/basic-layout',
    // wrappers: ['@/wrappers/gate'],
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      Dashbaord,
    ],
  },
];

export default routes;
