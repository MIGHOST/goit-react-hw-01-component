import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


const FriendList = ({
    friends
  }) => {
    return ( <
        ul className = {
          styles.friend_list
        } > {
          friends.map(friend => ( <
              li key = {
                friend.id
              }
              className = {
                styles.item
              } >
              <
              span className = {
                friend.isOnline ? styles.online : styles.offline
              } > < /span>


              <
              img className = {
                styles.avatar
              }
              src = {
                friend.avatar
              }
              alt = ""
              width = "48" / >
              <
              p className = {
                styles.name
              } > {
                friend.name
              } < /p> <
              /li>))} <
              /ul>)
            };



            FriendList.propTypes = {
              friends: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.number.isRequired,
                  isOnline: PropTypes.bool.isRequired,
                  avatar: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
                })),

            };

            export default FriendList;