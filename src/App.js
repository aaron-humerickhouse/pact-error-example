import React from 'react';
import { Provider } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';

import './App.css';
import configureStore from './configureStore';
import RouterComponent from "./components/RouterComponent";
import Title from "antd/lib/typography/Title";

const { Header, Content, Footer } = Layout;

function App() {
  const store = configureStore({});

  return (
    <Provider store={store}>
      <Layout className="layout">
        <Header>
          <img src="/images/tx_bowling.svg" alt="TX Bowling" height={'54px'} style={{float: 'left'}}/>
          <Title style={{float: 'left', color: 'white'}}>TX Bowling</Title>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <RouterComponent />
         </Content>
        <Footer style={{ textAlign: 'center' }}>
          TX Bowling ©2020
        </Footer>
      </Layout>
    </Provider>
  );
}

export default App;
