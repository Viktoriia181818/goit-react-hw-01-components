import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { UsersProfile } from 'components/UserProfile/Userprofile';
import user from './components/UserProfile/user.json';
import { Friendsocial } from 'components/FriendList/Friendsocial';
import friends from './components/FriendList/friends.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <UsersProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
       <Friendsocial friends={friends} />
    </App>
  </React.StrictMode>
);
