// import Layout from "./components/layout.jsx";
// import TweetAvatarContext from "./context/TweetAvatarContext.js";
// import TweetsData from "./utils/tweetsData.js"

// import('./style/reset.css');
// import('./style/App.css');

// export default function App() {
//   return (
//     <>
//       <TweetsData.Provider>
//         <TweetAvatarContext.Provider>
//           <Layout />
//         </TweetAvatarContext.Provider>
//       </TweetsData.Provider>
//     </>
//   );
// };

// import { useState } from 'react';
// import Login from './components/login.jsx';
// import UserContext from "./context/UserContext.js";
// import Layout from './components/layout.jsx';

// export default function App() {
//     const [pseudo, setPseudo] = useState(null);

//     const handleLoginSubmit = (userName) => {
//         setPseudo(userName);
//     };

//     return (
//         pseudo ?
//             <UserContext.Provider value={{ isLogged: true, pseudo: pseudo }}>
//                 <Layout />
//             </UserContext.Provider>
//             :
//             <Login onLoginSubmit={handleLoginSubmit} />
//     );
// };


import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from "./pages/home";
import Explore from './components/explore';
import Notifications from './components/notifications';
import Messages from './components/messages';
import Bookmarks from './components/bookmarks';
import Lists from './components/liste';
import Profile from './components/profile';
import More from './components/more';
import UserProfile from './pages/user-profile';
import DataProvider from './components/data-provider';
import InitialData from "./data/initial-data.json";
import Login from './components/login';
import useUserStore from './context/UserContext';


export default function App() {

  const { pseudo, userProfil, isLogged, upDatePseudo, upDateIsLogged } = useUserStore();

  const usersData = InitialData.currentUser;

  let currentUser = usersData;

  const [userData, setUserdata] = useState(currentUser);

  return (

    <DataProvider>
      <BrowserRouter>
        <Routes>
          {
            !isLogged ? <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/more" element={<More />} />
              <Route path=":tweetTitle" element={<UserProfile />} />
            </Route> : <Route path="/" element={<Login />} />
          }
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}