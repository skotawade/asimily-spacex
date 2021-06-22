import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'

import SearchBox from './SearchBox';

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
      <SearchBox />
    </Provider>
  );
})
describe("SearchBox", () => {
  test('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders search Icon component', () => {
    expect(wrapper.find('#searchIcon')).toHaveLength(1)
  });

  test('renders input component', () => {
    expect(wrapper.find('#input')).toHaveLength(3)
  });
})
