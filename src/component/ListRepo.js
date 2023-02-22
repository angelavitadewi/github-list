import { Row, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import Repo from './Repo';
import style from './SearchUsername.module.css';

const ListRepo = ({ reposUrl }) => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (reposUrl) {
      setLoading(true);
      fetch(reposUrl)
        .then((res) => res.json())
        .then((data) => {
          setRepos(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [reposUrl]);
  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className={style.searchUsername}>
          <div className={style.mid60}>
            <Row gutter={16}>{repos && repos.map((item) => <Repo key={item.id} {...item} />)}</Row>
          </div>
        </div>
      )}
    </>
  );
};

export default ListRepo;
