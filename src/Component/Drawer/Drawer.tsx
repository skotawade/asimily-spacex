import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
  getIsDrawerOpen,  
  getSelectedTab,  
  setIsDrawerOpen,
  getSelectedSubMenu,
  selectSubMenu  
} from '../Header/HeaderSlice';
import { HEADER_TAB } from '../../utility/constants';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

function DrawerLeft() {
  const dispatch = useAppDispatch();
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const selectedTab = useAppSelector(getSelectedTab);
  const isDrawerOpen = useAppSelector(getIsDrawerOpen);
  const selectedSubMenu = useAppSelector(getSelectedSubMenu);

  const handleDrawerClose = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen));
  };

  const handleSubMenuChange = (subMenu: any) => {
    dispatch(selectSubMenu(subMenu.text))
    handleDrawerClose();
    subMenu.component && history.push(subMenu.component);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        key='drawer' 
        id='drawer'
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} key='iconButton' id='iconButton'>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List key='list' id='list'>
          {HEADER_TAB[selectedTab].subMenue.map((subMenu) => (
            <ListItem button key={subMenu.value}>
              <ListItemText primary={subMenu.value} onClick={() => handleSubMenuChange(subMenu)}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerLeft;