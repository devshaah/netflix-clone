import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/counter/userSlice';
import Profile from './screens/Profile';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{ 
      if(userAuth){
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        dispatch(logout()); //would reset user back to null
      }
    });

    return unsubscribe
  },[dispatch])
  //adds kind of a listener

  return (
    <div className="App">
      <Router>
          {
          !user ? 
            (
              <LoginScreen/>
            )
            :
            (
              <Routes>
              <Route exact path="/" element={<Homescreen/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              </Routes>
            )
          }
            </Router>  
                
    </div>
  );
}

export default App;
