import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import missionReducer from '../Layout/Dashboard/missionSlice';
import headerReducer from '../Component/Header/HeaderSlice';

export const store = configureStore({
  reducer: {
    mission: missionReducer,
    header: headerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
