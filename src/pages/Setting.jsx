


import React, { useState } from 'react';
import Nav from "../components/Nav";
import Siderbar from "../components/Siderbar";

function Settings() {
    const [showSideBar, setShowSideBar] = useState(false); // Added state for sidebar
    const [newPassword, setNewPassword] = useState('');

    function handlePasswordReset() {
        // Handle password reset functionality
    }

    return (
        <div className='flex'>
            {showSideBar && <Siderbar />}
            <div className='setting_container'>
            <div className="settings-container">
                <h1>SETTING</h1>
                <Nav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
         
                <div className="settings-section">
                    <h3>Password Reset</h3>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter current password"
                    />
                </div>
                <div className="settings-section">
                    <h3></h3>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                    />
                </div>
                <div className="settings-section">
                    <h3></h3>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter confirm password"
                    />
                    <button onClick={handlePasswordReset}>Reset Password</button>
                </div>
            </div>
            </div>
            
           
        </div>
    );
}

export default Settings;
