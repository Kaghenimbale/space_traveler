import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission } from '../../features/Mission/missionSlice';
import './mission.css';

const Mission = () => {
  const { missionItems } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  fetchMission();
  return (
    <div className="mission-content">
      <table className="table-mission">
        <thead>
          <tr className="mission">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {missionItems.map((item) => (
            <tr className="table-item" key={item.mission_id}>
              <td className="title">{item.mission_name}</td>
              <td className="description">{item.description}</td>
              <td className="status">
                <p>NOT A MEMBER</p>
              </td>
              <td>
                <button className="table-btn" type="button">
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
