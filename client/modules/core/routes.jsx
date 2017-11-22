import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import ItemList from '../items/components/ItemList.jsx';
import Body from '../items/components/Body.jsx';
import Login from '../users/containers/Login.js';
import NewUser from '../users/containers/NewUser.js';
import GroundDetail from '../items/components/PageDetail.jsx';
import Matchs from '../items/components/Matchs.jsx';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Body />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
    }
  });

  FlowRouter.route('/Detail', {
    name: 'ground.detail',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<GroundDetail />)
      });
    }
  });

  FlowRouter.route('/Matchs', {
    name: 'matchs',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Matchs />)
      });
    }
  });

}
