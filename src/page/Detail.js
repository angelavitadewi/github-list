import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListRepo from '../component/ListRepo';
import UserProfile from '../component/UserProfile';

const Detail = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (params.username) {
      setLoading(true);
      fetch(`https://api.github.com/users/${params.username}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params.username]);

  return (
    <>
      {loading && <Skeleton />}
      {user && (
        <>
          <UserProfile user={user} />
          <ListRepo reposUrl={user?.repos_url} />
        </>
      )}
    </>
  );
};

export default Detail;
