import { Avatar, Card, Col, Divider, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './SearchUsername.module.css';

export default function Repo(props) {
  return (
    <>
      <Col span={8}>
        <Card>
          <Card.Meta
            avatar={<Avatar src={props.owner.avatar_url} alt={props.owner.login} />}
            title={props.name}
            description={<p className={style.roundedButton}>{props.private ? 'Private' : 'Public'}</p>}
          />
          <Divider />
          <p>{props.description}</p>
          <Row align='middle' justify='space-between'>
            <Col>
              <Link to={props.html_url}> View Repo</Link>
            </Col>
            <Col>
              <p>{props.stargazers_count.toLocaleString()} stars</p>
              <p>{props.watchers_count.toLocaleString()} Watchers</p>
            </Col>
          </Row>

          <Row align='middle' justify='space-between'>
            <Col>
              <p className={style.roundedButton}>{props.language}</p>
            </Col>
            <Col>
              {props.topics &&
                props.topics.map((topic, index) => (
                  <React.Fragment key={index}>
                    <p className={style.roundedButton}>{topic}</p>
                  </React.Fragment>
                ))}
            </Col>
            <Col>
              <p>{props.open_issues} issues</p>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}
