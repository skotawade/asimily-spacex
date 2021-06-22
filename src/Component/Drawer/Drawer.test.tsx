import Enzyme, { mount } from 'enzyme';
import thunk from 'redux-thunk'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';

import DrawerLeft from './Drawer';

const middlewares: any = [thunk]
const mockStore: any = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

let wrapper: any;
let store;

beforeEach(() => {
  store = mockStore({
    header: {
      selectedTab: 0,
      isDrawerOpen: false,
      selectedSubMenu : '',
    }
  });

  wrapper = mount(
    <Provider store={store}>
      <DrawerLeft />
    </Provider>
  );
})
describe("Header", () => {
  test('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders Drawer component', () => {
    expect(wrapper.find('#drawer')).toHaveLength(3)
  });

  test('renders Icon Button component', () => {
    expect(wrapper.find('#iconButton')).toHaveLength(5)
  });

  test('renders List component', () => {
    expect(wrapper.find('#list')).toHaveLength(3)
  });
})
