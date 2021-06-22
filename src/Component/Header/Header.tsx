import React from 'react';
import clsx from 'clsx';

import { HEADER_TAB } from '../../utility/constants';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Tab, Tabs } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
  getIsDrawerOpen, 
  getSelectedTab, 
  selectTab, 
  setIsDrawerOpen  
} from './HeaderSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    }, 
  }),
);

function Header() {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector(getSelectedTab);
  const isDrawerOpen = useAppSelector(getIsDrawerOpen);

  const handleTabChange = (event: any, newValue: number) => {
    dispatch(selectTab(newValue));
    dispatch(setIsDrawerOpen(true));
  };

  const handleDrawerOpen = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen))
  };

  const classes = useStyles();

  return (
      <AppBar position="static" color="primary" elevation={0} key='appBar' id='appBar'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Tabs value={selectedTab} onChange={handleTabChange} >
            {
              HEADER_TAB.map((tab, index) => {
                return (
                  <Tab label={tab.value} key={index}/>
                )
              })
            }
          </Tabs>
        </Toolbar>
      </AppBar>

  );
}

export default Header;
