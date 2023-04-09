import React from 'react'
import "./Profile.css"
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase'

const Profile = () => {

    const user = useSelector(selectUser)

  return (
    <div className='profile'>
        <Navbar/>
     <div className='profile_body'>
        <h1>Edit Profile</h1>
        <div className='profile_info'>
            <img src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png' alt='img'/>

            <div className='profile_details'>
                <h4>{user.email}</h4>

                <div className='profile_plans'>
                <h3>Plans(Current Plan: premium)</h3>
                <h4>Renewal Date : 04/04/2023 </h4>
                <div className='plan_box'>
                    <div className='plan_row'>
                        <div>
                        <h5>Netflix Standard</h5>
                        <h6>1080p</h6></div>
                        <button className='subscribe'>Subscribe</button>
                    </div>
                    <div className='plan_row'>
                    <div ><h5>Netflix Basic</h5>
                        <h6>480p</h6></div>
                        <button className='subscribe'>Subscribe</button>
                    </div>
                    <div className='plan_row'>
                    <div>
                    <h5>Netflix Premium</h5>
                        <h6>4K + HDR</h6></div>
                        <button className='subscribed'>Current Package</button>
                    </div>
                    <button 
                    onClick={()=>auth.signOut()}
                    className='profile_signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
      
    </div>
  )
}

export default Profile
