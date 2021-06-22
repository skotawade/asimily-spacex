import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { MISSION_TABLE_COLS } from '../../utility/constants';
import { getMissions } from '../../Layout/Dashboard/missionSlice';
import { useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';

const columns = MISSION_TABLE_COLS;

interface Data {
    mission_name: string;
    launch_year: string;
    rocket_name: string;
    rocket_type: string;
}

function createData(mission_name: string, launch_year: string, rocket_name: string, rocket_type: string): Data {
  return { mission_name, launch_year, rocket_name, rocket_type };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function MissionTable({data = []}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [missionList, setMissionList] = useState<any>([]);


  const getRowDataCreated = async() => {
    let missionData : any = []
    await Promise.all(data.map( async (mission: any) => {
     missionData.push(
       await createData(
         mission.mission_name,
         mission.launch_year,
         mission.rocket.rocket_name,
         mission.rocket.rocket_type,
     ));
    }));
    setMissionList(missionData);
  }

  useEffect(() => {
    getRowDataCreated();
  }, [data])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {missionList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={missionList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
