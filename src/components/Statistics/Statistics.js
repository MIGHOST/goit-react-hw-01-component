import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import generateColor from '../helpers/helpers';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title.length > 0 && (
        <ul className={styles.stat_list}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={styles.item}
              style={{ backgroundColor: generateColor() }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
