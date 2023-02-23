import { Image, Input } from 'antd';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import logo from '../asset/logo.png';
import { setLoading } from '../redux/CommonAction';
import ListUser from './ListUser';
import style from './SearchUsername.module.css';

const SearchUsername = (props) => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const onSearch = (search) => {
    if (search) {
      setLoading(dispatch, true);
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
        .then((res) => res.json())
        .then((data) => {
          const users = data.items;
          setUsers(users);
        })
        .finally(() => {
          setLoading(dispatch, false);
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
          loading={props.loading}
          onSearch={onSearch}
          className={style.mid40}
        />
      </div>
      {users && <ListUser users={users} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps, null)(SearchUsername);
