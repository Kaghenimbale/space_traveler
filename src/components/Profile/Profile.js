import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missionItems } = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="content">
      <div className="mission">
        <h2>My Missions</h2>
        <ul className="progress-mission">
          {missionItems.map(
            (item) => item.reserved && (
            <li key={item.mission_id}>{item.mission_name}</li>
            ),
          )}
        </ul>
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <div className="progress-rocket">
            {reservedRockets.map((rocket) => (
              <div className="item" key={rocket.id}>
                <h4>{rocket.name}</h4>
              </div>
            ))}
          </div>
        ) : (
          <div>No rockets reserved</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
