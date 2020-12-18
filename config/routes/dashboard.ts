import Route from '@/common/types/route';

const routes: Route = {
  path: '/dashboard',
  title: '首页',
  component: '../layouts/dashboard-layout',
  routes: [
    {
      path: '/dashbaord/view',
      component: '@/pages/dashboard/view',
      title: '总览',
    },
    {
      path: '/dashbaord/anylysis',
      component: '@/pages/dashboard/analysis',
      title: '分析',
    },
    {
      path: '/dashbaord/work-place',
      component: '@/pages/dashboard/work-place',
      title: '工作台',
    },
  ],
};

export default routes;
