import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ avatar, name, isOnline }) => (
    <li className={css.item}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img src={avatar} alt="avatarka" className={css.avatar} />
        <p className={css.name}>{name}</p>
    </li>
)

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};