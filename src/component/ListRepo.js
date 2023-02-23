import { Row, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setLoading } from '../redux/CommonAction';
import Repo from './Repo';
import style from './SearchUsername.module.css';

const ListRepo = ({ reposUrl, loading }) => {
  const [repos, setRepos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reposUrl) {
      setLoading(dispatch, true);
      fetch(reposUrl)
        .then((res) => res.json())
        .then((data) => {
          setRepos(data);
        })
        .finally(() => {
          setLoading(dispatch, false);
        });
    }
  }, [reposUrl, dispatch]);
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

const mapStateToProps = (state) => {
  return {
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps, null)(ListRepo);
