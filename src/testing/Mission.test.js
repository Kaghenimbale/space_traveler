import { render, cleanup, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Mission from '../components/Mission/Mission';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore();
const store = mockStore({
  mission: {
    missionItems: [
      {
        mission_id: '1',
        mission_name: 'Go to Mars',
        description: 'Mars is a great planet',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Go to Jupiter',
        description: 'Jupiter is a great planet',
        reserved: false,
      },
      {
        mission_id: '3',
        mission_name: 'Go to Saturn',
        description: 'Saturn is a great planet',
        reserved: false,
      },
    ],
    isFetched: true,
  },
});
afterEach(cleanup);

describe('Render UI', () => {
  it('Render Component', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(screen.getByText('Go to Saturn')).toBeInTheDocument();
  });
  it('Render mission lists', () => {
    const { container } = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
