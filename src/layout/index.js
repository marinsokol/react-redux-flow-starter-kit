import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';

const {
  Header,
  Footer,
  Content,
} = Layout;

export default class extends PureComponent {
  static displayName = 'App'

  static propTypes = {
    children: PropTypes.element,
    location: PropTypes.shape(),
  }

  state = {}

  render() {
    const { children, location: { pathname } } = this.props;

    return (
      <Layout>
        <Header>
          <Menu
            mode="horizontal"
            theme="dark"
            defaultSelectedKeys={[pathname]}
          >
            <Menu.Item key="/">
              <Link to="/">
                <Icon type="home" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="/game">
              <Link to="/game">
                <Icon type="play-circle-o" />
                Game
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          {children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
