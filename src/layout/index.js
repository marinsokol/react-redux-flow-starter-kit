import React, { PureComponent } from 'react';
import { Link } from 'react-router';
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

type Props = {
  children: HTMLElement,
  location: {
    pathname: string,
  }
};
type State = Object;

export default class extends PureComponent<void, Props, State> {
  static displayName = 'Root'

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
        <Footer>Setup Kit@2017</Footer>
      </Layout>
    );
  }
}
