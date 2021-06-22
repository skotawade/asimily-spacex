import React from 'react';

import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Header from './Component/Header/Header';
import Dashboard from './Layout/Dashboard/Dashboard';
import DrawerLeft from './Component/Drawer/Drawer';
import background from './img/main.png';

import './App.css';
import { ROUTES } from './utility/constants';

const styles = {
  paperContainer: {
    backgroundImage: `url(${background})`,
    minHeight: 1000,
  },
};
function App() {
  return (
    <div style={styles.paperContainer}>
      <BrowserRouter>
        <Header />
        <DrawerLeft />
        <Switch>
          <Route path={ROUTES.DEFAULT} exact component={Dashboard}></Route>
          <Route path={ROUTES.DASHBOARD} exact component={Dashboard} />
          <Route path={ROUTES.COMING_SOON}>
            <h1>Coming Soon</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
