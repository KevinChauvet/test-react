import Avatar from './components/Avatar';
import Menu from './components/Menu';

import './App.css';

const user = {
  name: 'Jane Doe',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="avatar">
          {isLoggedIn === false ? (
            <p>Il faut se connecter !</p>
          ) : (
            <Avatar user={user} />
          )}
        </div>
        <div className="menu">
          <Menu isLoggedIn={isLoggedIn} />
        </div>
      </header>
    </div>
  );
}

export default App;