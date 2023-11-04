// імпорти усіх компонентів
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

// імпорти усіх джйсонів
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';

export default function App() {
  return (
    <div className="container">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}
