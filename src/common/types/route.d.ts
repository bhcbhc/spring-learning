import { IRoute } from 'umi';

export default interface Route extends IRoute {
  icon?: string;
  routes?: Array<Route>;
  hideSiderBar?: boolean;
}
