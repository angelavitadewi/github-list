import { Image, Input } from 'antd';
import { useState } from 'react';
import logo from '../asset/logo.png';
import ListUser from './ListUser';
import style from './SearchUsername.module.css';

const SearchUsername = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const onSearch = (search) => {
    if (search) {
      setLoading(true);
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
        .then((res) => res.json())
        .then((data) => {
          const users = data.items;
          setUsers(users);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <>
      <div className={style.searchUsername}>
        <Image width={100} src={logo} preview={false} />
        <Input.Search
          placeholder='Search Github Account'
          enterButton='Search'
          size='large'
          loading={loading}
          onSearch={onSearch}
          className={style.mid40}
        />
      </div>
      {users && <ListUser users={users} />}
    </>
  );
};

export default SearchUsername;
