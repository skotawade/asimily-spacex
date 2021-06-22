import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { useDebounce } from 'use-debounce';

import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { searchBy } from '../../Layout/Dashboard/missionSlice';
import { DEBOUNSE_DELAY } from '../../utility/constants';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    border: 'solid 0.1px rgba(0, 0, 0, 0.54)',
    borderRadius: '10px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function SearchBox() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [searchText, setSearchText] = useState('')
  const [debouncedSearchText] = useDebounce(searchText, DEBOUNSE_DELAY);

  const handleOnChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    dispatch(searchBy(debouncedSearchText))
  }, [debouncedSearchText])

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon} key='searchIcon' id='searchIcon'>
        <SearchIcon />
      </div>
      <InputBase
        key='input' id='input'
        placeholder="Search"
        value={searchText}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default SearchBox;
