import React,{ useState, useEffect} from 'react';
import { API } from "../API/api";

import {  Button, Card   } from 'antd';
import { CookiesProvider, useCookies } from 'react-cookie'


 const ProfileComponent: React.FC = () => {
  const [isLogged, setLogged] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState(
    {id: '', name: "", email: '', description : ""}
   ); 
  const [result, setResult] = useState("");

  
  useEffect(() => {
    const fetchUserData = async () => {
        setLogged(false);
        setResult("");
        setError("");
      try {
        
        const response = await API.user.getCurrentUser()
        setLogged(true);

        setUserInfo(response);
        setError('');
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLogged(false);
      }
    };

    fetchUserData();
  }, []);

  /* const buttonHelper = () => {
    const logoutRequest = async () => {
      try {
        await API.auth.logout();
        setLogged(false);
        setResult("");
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    logoutRequest();
  }
   */

  return (
     <div style={{margin: 50, padding: 10,   borderRadius: 10, maxHeight:300 }}>
      <p> ID:  {userInfo.id}</p>
      <p> NAME: {userInfo.name}</p>
      <p>EMAIL:  {userInfo.email}</p>
      <p> DESCRIPTION: {userInfo.description}</p>
      <div></div>
 
    </div>
    
        
       
   );
};

export default ProfileComponent;