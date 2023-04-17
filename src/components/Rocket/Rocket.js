import React from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const { rocketItems } = useSelector((state) => state.rocket);
  console.log(rocketItems);
  return <div>Rocket</div>;
};

export default Rocket;
