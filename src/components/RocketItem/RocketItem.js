import React from 'react';
import PropTypes from 'prop-types';
import styles from './RocketItem.module.css';

const RocketItem = ({ rocket }) => {
  const { name, description, img } = rocket;
  return (
    <li className={styles.card}>
      <img src={img} alt={name} className={styles.img} />
      <div className={styles.cardBody}>
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button" className={styles.btn}>Reserve Rocket</button>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;
