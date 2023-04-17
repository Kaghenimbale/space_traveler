import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission } from '../../features/Mission/missionSlice';

const Mission = () => {
  const { missionItems } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  fetchMission();
  return (
    <table className="mission-content">
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
      {missionItems.map((item) => (
        <tr key={item.mission_id} className="mission">
          <th>{item.mission_name}</th>
          <th>{item.description}</th>
          <th>NOT A MEMBER</th>
          <th>
            <button type="button">Join Mission</button>
          </th>
        </tr>
      ))}
    </table>
  );
};

export default Mission;
