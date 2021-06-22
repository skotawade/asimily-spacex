import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface HeaderState {
    selectedTab: number,
    isDrawerOpen: boolean,
    selectedSubMenu : string,
  }
  
const initialState: HeaderState = {
  selectedTab: 0,
  isDrawerOpen: false,
  selectedSubMenu : '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,

  reducers: {
    selectTab: (state, action : PayloadAction<number>) => {
        state.selectedTab = action.payload;
    },
    setIsDrawerOpen: (state, action : PayloadAction<boolean>) => {
        state.isDrawerOpen = action.payload;
    },
    selectSubMenu: (state, action : PayloadAction<boolean>) => {
        state.isDrawerOpen = action.payload;
    }
  },
});

export const { selectTab, setIsDrawerOpen,selectSubMenu } = headerSlice.actions;

export const getSelectedTab = (state: RootState) => state.header.selectedTab;

export const getIsDrawerOpen = (state: RootState) => state.header.isDrawerOpen;

export const getSelectedSubMenu = (state: RootState) => state.header.selectedSubMenu;


export default headerSlice.reducer;
