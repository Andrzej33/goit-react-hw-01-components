import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="friend">{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};