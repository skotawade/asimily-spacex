import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@material-ui/core';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getMissionDataAsync,
  getMissions,
  getSearchKeyword
} from '../../Layout/Dashboard/missionSlice';
import SearchBox from '../../Component/SearchBox/SearchBox';
import { isArray } from '../../utility/utils';
import MissionTable from '../../Component/MissionTable/MissionTable';

function Dashboard() {
  const dispatch = useAppDispatch();
  const missions = useAppSelector(getMissions);
  const searchKeyword = useAppSelector(getSearchKeyword);

  const [missionList, setMissionList] = useState<any>([]);

  const filterMissionsDataBySearch = () => {
   const filteredMissionData = isArray(missions.missionData) && missions.missionData.filter(mission => {
      if (searchKeyword) {
        const searchStr = searchKeyword.toLowerCase()
        const { mission_name, launch_year, rocket: { rocket_name, rocket_type } } = mission;
        return mission_name.toLowerCase().includes(searchStr)
          || launch_year.toLowerCase().includes(searchStr)
          || rocket_name.toLowerCase().includes(searchStr)
          || rocket_type.toLowerCase().includes(searchStr)
      }
      return true
    });

     isArray(filteredMissionData) && setMissionList([...filteredMissionData])
  }

  useEffect(() => {
    dispatch(getMissionDataAsync())
  }, [])

  useEffect(() => {
    filterMissionsDataBySearch()
  }, [searchKeyword.length])

  useEffect(() => {
    filterMissionsDataBySearch()
  }, [missions.missionData.length])

  return (
    <Container maxWidth={false}>
      <Box display="flex" justifyContent="flex-start" m={5} ml={2}>
        <Box key='searchBox' id='searchBox' >
          <SearchBox />
        </Box>
      </Box>
      {
        <Box display="flex" justifyContent="flex-start" ml={1} mt={2} >
          <Box key='chip' id='chip' ml={5}>
            <Typography variant="h5">Search Result ({missionList.length})</Typography>
          </Box>
        </Box>
      }

      <Box 
        display="flex" 
        flexWrap="wrap" 
        justifyContent="center" 
        m={3} 
        key='missionList' 
        id='missionList' >
        {
          isArray(missionList) &&
          <MissionTable data={missionList} />
        }
      </Box>

    </Container >
  );
}

export default Dashboard;
