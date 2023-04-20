import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import {
  fetchMission,
  reserveMission,
} from '../../features/Mission/missionSlice';
import './mission.css';

const Mission = () => {
  const {
    missionItems, isLoading, error, isFetched,
  } = useSelector(
    (state) => state.mission,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchMission());
    }
  }, [dispatch, isFetched]);

  const handleReserved = (id) => {
    dispatch(reserveMission({ id }));
  };

  if (isLoading) {
    return (
      <div className="loader">
        <MoonLoader />
      </div>
    );
  }

  if (error) {
    return <h1>Something went Wrong!</h1>;
  }

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
                <p
                  className={
                    !item.reserved ? 'statusNotActive' : 'statusActive'
                  }
                >
                  {!item.reserved ? 'NOT A MEMBER' : 'Active Member'}
                </p>
              </td>
              <td>
                <button
                  className={!item.reserved ? 'table-btn' : 'tableBtnActive'}
                  type="button"
                  onClick={() => handleReserved(item.mission_id)}
                >
                  {!item.reserved ? 'Join Mission' : 'Leave Mission'}
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
