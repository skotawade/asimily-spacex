import { IDataInterface } from '../../Interface/Interfaces';
import { APIS } from "../../utility/constants";

export async function fetchMissions() {
  return new Promise<{ data: IDataInterface[] }>(async (resolve) => {
    const missions = await fetch(APIS.GET_LOUNCHES).then(res => res.json()).catch(err => err)
    resolve({ data: missions })
  }
  );

}
