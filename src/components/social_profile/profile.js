import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const Profile = ({ name, tag, location, avatar, alt, stats:{followers, views, likes} }) => {
  return (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={alt} className={styles.avatar}/>
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.stats_item}>
        <span >Followers</span>
<span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.stats_item}>
        <span>Views</span>
<span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.stats_item}>
        <span>Likes</span>
<span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);
  };

Profile.defaultProps = {
  alt: 'user_avatar',
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
   
};

export default Profile;
