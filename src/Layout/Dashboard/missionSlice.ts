import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IDataInterface } from '../../Interface/Interfaces';
import { fetchMissions } from './MissionAPI';
import { LOADER_STATUS } from '../../utility/constants';

const { IDEAL, LOADING } = LOADER_STATUS

export interface MissionState {
  missionData: IDataInterface[];
  searchBy: string;
}

const initialState: MissionState = {
  missionData: [],
  searchBy: '',
};

export const getMissionDataAsync = createAsyncThunk(
  'counter/fetchMissions',
  async () => {
    const response = await fetchMissions();
    return response.data;
  }
);

export const missionSlice = createSlice({
  name: 'mission',
  initialState,

  reducers: {
    searchBy: (state, action: PayloadAction<string>) => {
      state.searchBy = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissionDataAsync.fulfilled, (state, action) => {
        state.missionData = action.payload;
      });
  },
});

export const { searchBy } = missionSlice.actions;

export const getMissions = (state: RootState) => { return { missionData: state.mission.missionData} };

export const getSearchKeyword = (state: RootState) => state.mission.searchBy;

export default missionSlice.reducer;
