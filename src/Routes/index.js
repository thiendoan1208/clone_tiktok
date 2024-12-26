// Layouts
import { HeaderOnly } from '~/Layouts';
import config from '~/config';

// Pages
import Home from '~/Pages/Home';
import Explore from '~/Pages/Explore';
import Following from '~/Pages/Following';
import Friends from '~/Pages/Friends';
import Live from '~/Pages/Live';
import Messages from '~/Pages/Messages';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

// Routes khi chưa đăng nhập vẫn xem được
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.following, component: Following },
  { path: config.routes.friends, component: Friends },
  { path: config.routes.live, component: Live },
  { path: config.routes.messages, component: Messages, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

// Chỉ khi đăng nhập hoặc đăng kí mới xem được
const privateRoutes = [];

export { privateRoutes, publicRoutes };


