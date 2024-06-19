'use client'
import React from 'react';
import { logoutHandler } from '@/actions';


const LogoutButton: React.FC = (props) => {
    return (
        <button className="bg-white text-blue-500 px-4 py-2 mt-2" onClick={logoutHandler}>
            Logout
        </button>
    );
};

export default LogoutButton;