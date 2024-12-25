import { memo } from 'react';
import AccountItem from '../AccountItem';

function AccountListMemo({ data }) {
  return (
    <>
      {data.map((item) => (
        <AccountItem key={item.id} data={item} />
      ))}
    </>
  );
}

export default memo(AccountListMemo);
