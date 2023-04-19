import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

export default function RocketList({ rocket = {} }) {
  const dispatch = useDispatch();

  const handleReserveButtonClick = () => {
    dispatch(reserveRocket(rocket.id));
  };

  const handleCancelReservationButtonClick = () => {
    dispatch(cancelRocket(rocket.id));
  };
  console.log(rocket);

  return (
    <div className="rocket-list-item">
      <img className="rocket-image" src={rocket.flickr_images} alt={rocket.name} />
      <div className="rocket-info">
        <h2>{rocket.name}</h2>
        <p>
          {rocket.reserved && <span className="rocket-badge">Reserved</span>}
          {' '}
          {rocket.description}
        </p>
        {rocket.reserved && <button type="button" onClick={handleCancelReservationButtonClick}>Cancel reservation</button>}
        {!rocket.reserved && <button onClick={handleReserveButtonClick}>Reserve rocket</button>}
      </div>
    </div>
  );
}

RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
