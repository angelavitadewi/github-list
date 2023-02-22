import { Avatar, Descriptions, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import style from './SearchUsername.module.css';

const UserProfile = ({ user }) => {
  return (
    <div className={style.searchUsername}>
      <div className={style.mid60}>
        <Descriptions
          title={
            <Row align='middle'>
              <Avatar src={user.avatar_url} size={150} />

              <Typography.Title level={2}>
                <Link to={user.html_url}>{user.login} </Link>
              </Typography.Title>
            </Row>
          }
          bordered
        >
          <Descriptions.Item label='ID'>{user.id}</Descriptions.Item>
          <Descriptions.Item label='Location'>{user.location}</Descriptions.Item>
          <Descriptions.Item label='Email'>{user.email}</Descriptions.Item>
          <Descriptions.Item label='Followers'>{user.followers}</Descriptions.Item>
          <Descriptions.Item label='Following'>{user.following}</Descriptions.Item>
          <Descriptions.Item label='Public Repo'>{user.public_repos}</Descriptions.Item>
          <Descriptions.Item label='Bio'>{user.bio}</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default UserProfile;
