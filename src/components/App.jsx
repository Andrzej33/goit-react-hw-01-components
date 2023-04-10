import { ProfileCard } from "./Profile";
import user from "../user.json"

export const App = () => {
  return (
    <div>
      <ProfileCard description={user}/>
    </div>
  );
};
