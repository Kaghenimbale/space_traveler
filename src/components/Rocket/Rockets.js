import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketList from './RocketList';
import { fetchRockets } from '../../features/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      {rockets.map((rocket) => (
        <RocketList rocket={rocket} key={rocket.id} />
      ))}
    </div>
  );
};

export default Rockets;
