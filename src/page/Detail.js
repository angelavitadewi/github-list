import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListRepo from '../component/ListRepo';
import UserProfile from '../component/UserProfile';
import { setLoading } from '../redux/CommonAction';

const Detail = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (params.username) {
      setLoading(dispatch, true);
      fetch(`https://api.github.com/users/${params.username}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .finally(() => {
          setLoading(dispatch, false);
        });
    }
  }, [params.username, dispatch]);

  return (
    <>
      {props.loading && <Skeleton />}
      {user && (
        <>
          <UserProfile user={user} />
          <ListRepo reposUrl={user?.repos_url} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps, null)(Detail);
