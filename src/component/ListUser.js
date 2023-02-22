import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import style from './SearchUsername.module.css';

const ListUser = ({ users }) => {
  return (
    <div className={style.searchUsername}>
      <List
        itemLayout='horizontal'
        dataSource={users}
        className={style.mid40}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar_url} />}
              title={<Link to={`detail/${item.login}`}>{item.login}</Link>}
              description={item.id}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListUser;
