import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}

      <ul className={styles['stat-list']}>
        {stats.map(statsItem => (
          <li
            className={styles.item}
            key={statsItem.id}
            style={{ backgroundColor: randomColor({ luminosity: 'dark' }) }}
          >
            <span className={styles.label}>{statsItem.label}</span>
            <span className={styles.percentage}>{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
