import React,{ Component } from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import ItemList from './components/ItemList.jsx';
import { Router, Route, Switch } from 'react-router'

const Routes =() =>(
  <Switch >
  <Route patch='/' component={ItemList}></Route>
</Switch>
)
export default Routes;
