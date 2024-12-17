// Layouts
import { HeaderOnly } from '~/Components/Layouts';

// Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

// Routes khi chưa đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// Chỉ khi đăng nhập hoặc đăng kí mới xem được
const privateRoutes = [];

export { privateRoutes, publicRoutes };
