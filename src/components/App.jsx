import { ProfileCard } from "./Profile";
import user from "../user.json";
import friends from '../friends.json'
import { FriendList } from "./FriendList";

export const App = () => {
  return (
    <div style={{
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:30,
    }}>
      <ProfileCard description={user} />
      <FriendList friends={friends } />
    </div>
  );
};
