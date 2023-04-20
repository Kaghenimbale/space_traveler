import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import confingureMockstore from 'redux-mock-store'
import Rockets from '../components/Rocket/Rockets';
import '@testing-library/jest-dom';
import { reserveRocket } from '../features/rockets/rocketsSlice';

const mockStore = confingureMockstore([]);

describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Falcon 9',
            description: 'A reusable rocket developed by SpaceX',
            images: '#',
            reserved: false,
          },
          {
            id: 2,
            name: 'Atlas V',
            description: 'A rocket developed by United Launch Alliance',
            images: '#',
            reserved: false,
          }
        ],
        isFetched: true,
      },
    });
    store.dispatch(reserveRocket(1));
  });
  it('should render component with a list of rockets', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );
  
    const heading = screen.getByRole('heading', { name: /rockets/i });
    expect(heading).toBeInTheDocument();
  
    const rocketNames = screen.getAllByRole('heading', { level: 2 });
    expect(rocketNames.length).toBe(2);
  
    const rocketImages = screen.getAllByRole('img');
    expect(rocketImages.length).toBe(2);
  });

  it('test for Rockets component with button click', () => {
    const reservebtn = render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );
    expect(reservebtn).toMatchSnapshot(); 
  })
});
