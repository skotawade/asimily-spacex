import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import thunk from 'redux-thunk'
import configureStore from "redux-mock-store";

import Header from './Header';
import { Provider } from 'react-redux';



const middlewares = [thunk]
const mockStore = configureStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

let wrapper: any;
let store;

beforeEach(() => {
  store = mockStore({
    header : {
      selectedTab: 0,
      isDrawerOpen: false,
      selectedSubMenu : '',
    }
  });

  wrapper = mount(
    <Provider store={store}>
      <Header />
    </Provider>
  );
})
describe("Header", () => {
  test('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('renders App Bar component', () => {
    expect(wrapper.find('#appBar')).toHaveLength(5)
  });
})
