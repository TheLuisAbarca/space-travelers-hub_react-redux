import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import style from './Mission.module.css';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (!mission.reserved) {
      dispatch(joinMission(mission.mission_id));
    } else {
      dispatch(leaveMission(mission.mission_id));
    }
  };
  /*
  Other valid way of do it!
  const badgeRender = () => {
    if (mission.reserved) {
      return <Badge bg="primary">Active Member</Badge>;
    }
    return <Badge bg="secondary" className={style.capitalized}>Not a member</Badge>;
  };
  <Button
    onClick={clickHandler}
    type="button"
    variant={(mission.reserved) ? 'outline-danger' : 'outline-secondary'}
  >
    {(mission.reserved) ? 'Leave ' : 'Join '}
    Mission
  </Button>
  */
  const classMissionTitle = `align-top ${style.bold}`;

  return (
    <>
      <tr>
        <td className={classMissionTitle}>{mission.mission_name}</td>
        <td>{mission.mission_description}</td>
        <td className="align-middle">
          {mission.reserved && <Badge bg="primary">Active Member</Badge>}
          {!mission.reserved && <Badge bg="secondary" className={style.capitalized}>Not a member</Badge>}
        </td>
        <td className="align-middle">
          {!mission.reserved && <Button onClick={clickHandler} type="button" variant="outline-secondary">Join Mission</Button>}
          {mission.reserved && <Button onClick={clickHandler} type="button" variant="outline-danger">Leave Mission</Button>}
        </td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    mission_description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
