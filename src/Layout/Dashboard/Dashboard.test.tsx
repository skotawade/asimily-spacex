import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'

import Dashboard from './Dashboard';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

let wrapper: any;
let store;

beforeEach(() => {
  store = mockStore({
    mission: {
      missionData: [],
      searchBy: '',
      filters: {
        status: {
          success: false,
          failure: false
        }
      }
    },
  });

  wrapper = mount(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
})
describe("Dashboard", () => {
  test('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders search box component', () => {
    expect(wrapper.find('#searchBox')).toHaveLength(2)
  });

  test('renders mission list component', () => {
    expect(wrapper.find('#missionList')).toHaveLength(2)
  });
})
