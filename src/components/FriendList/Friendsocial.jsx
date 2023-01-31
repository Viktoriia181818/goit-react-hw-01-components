import PropTypes from 'prop-types';
import { FriendList } from './FriendList';
import css from './FriendList.module.css';

export const Friendsocial = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(friend =>(
            <FriendList>
                key={friend.id}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={friend.name}
            </FriendList>
        ))}
    </ul>
)

Friendsocial.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};


