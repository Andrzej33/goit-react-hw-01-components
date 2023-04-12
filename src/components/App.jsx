import { ProfileCard } from './Profile';
import user from '../user.json';
import friends from '../friends.json';
import data from '../data.json';
import transactions from '../transactions.json';
import { Statsics } from './Statstics/Statstics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 30,
    // }}
    >
      <ProfileCard description={user} />
      <Statsics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
