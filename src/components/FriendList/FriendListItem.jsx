import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>

      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.friend}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
