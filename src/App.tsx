import React from 'react';
import RegistrationView from "./RegistrationView";
import './App.css';
import HomePageView from './components/HomePageView';
import ProfileView from './components/ProfileComponent';
import PostPageView from './components/PostPage';
import PostsCreationPage from './components/PostsCreationPage';
import AuthComponent from './components/AuthComponent';
import HeaderView from './components/HeaderView';
import FooterView from './components/FooterView';
import ThankfulPage from './components/ThankfulPage';
import AboutPage from './components/AboutPage';
import {
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <div >
      <HeaderView/>
      <Routes>
        <Route>
          <Route path='/auth/registration' element={<RegistrationView/>} />
          <Route path='/auth/login' element={<AuthComponent/>} />
          <Route path='/home' element={<HomePageView/>} />
          <Route path='/Profile' element={<ProfileView/>} />
          <Route path='/Posts' element={<PostPageView/>} />
          <Route path='/Authors' element={<PostsCreationPage/>} /> 
          <Route path='/ThankfulPage' element={<ThankfulPage/>} /> 
          <Route path='/AboutPage' element={<AboutPage/>} /> 

        </Route>
      </Routes>
    <FooterView/>
    </div>
     
  );
}

export default App;
