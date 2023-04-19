import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missionItems } = useSelector((state) => state.mission);
  return (
    <div className="content">
      <div className="mission">
        <h2>My Missions</h2>
        <ul>
          {missionItems.map((item) => <li key={item.mission_id}>{item.mission_name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Profile;