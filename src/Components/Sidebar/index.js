import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCompass,
  faUserPlus,
  faUserGroup,
  faVideo,
  faPaperPlane,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '../SuggestedAccounts';
import SidebarFooter from './SidebarFooter';
import SidebarLogin from './SidebarLogin';

const cx = classNames.bind(styles);

function Sidebar({ currentUser }) {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<FontAwesomeIcon icon={faHouse} />} />
        <MenuItem title="Explore" to={config.routes.explore} icon={<FontAwesomeIcon icon={faCompass} />} />
        <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faUserPlus} />} />
        <MenuItem title="Friends" to={config.routes.friends} icon={<FontAwesomeIcon icon={faUserGroup} />} />
        <MenuItem title="Live" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideo} />} />
        <MenuItem title="Messages" to={config.routes.messages} icon={<FontAwesomeIcon icon={faPaperPlane} />} />
        <MenuItem title="Profile" to={config.routes.profile} icon={<FontAwesomeIcon icon={faUser} />} />
      </Menu>

      {currentUser ? (
        <>
          <SuggestedAccounts label={'Suggested accounts'} />
          <SuggestedAccounts label={'Following accounts'} />

          <SidebarFooter />
        </>
      ) : (
        <>
          <SidebarLogin />

          <SidebarFooter />
        </>
      )}
    </aside>
  );
}

export default Sidebar;
