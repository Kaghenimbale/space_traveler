import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RingLoader } from 'react-spinners';
import {
  fetchMission,
  reserveMission,
} from '../../features/Mission/missionSlice';
import './mission.css';

const Mission = () => {
  const [reserved, setReserved] = useState(true);
  const { missionItems, isLoading } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  const handleReserved = (id) => {
    setReserved(!reserved);
    dispatch(reserveMission({ reserved, id }));
  };

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
          {isLoading ? (
            <div className="loader">
              <RingLoader />
            </div>
          ) : (
            missionItems.map((item) => (
              <tr className="table-item" key={item.mission_id}>
                <td className="title">{item.mission_name}</td>
                <td className="description">{item.description}</td>
                <td className="status">
                  <p>{!item.reserved ? 'NOT A MEMBER' : 'Active Member'}</p>
                </td>
                <td>
                  <button
                    className="table-btn"
                    type="button"
                    onClick={() => handleReserved(item.mission_id)}
                  >
                    {!item.reserved ? 'Join Mission' : 'Leave Mission'}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
