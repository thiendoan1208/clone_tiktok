// Layouts
import { HeaderOnly } from '~/Components/Layouts';
import routes from '~/config/routes';

// Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

// Routes khi chưa đăng nhập vẫn xem được
const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.following, component: Following },
  { path: routes.profile, component: Profile },
  { path: routes.upload, component: Upload, layout: HeaderOnly },
  { path: routes.search, component: Search, layout: null },
];

// Chỉ khi đăng nhập hoặc đăng kí mới xem được
const privateRoutes = [];

export { privateRoutes, publicRoutes };
