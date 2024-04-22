import React from 'react';
import Link from "next/link";

type ProfileLayoutProps = {
    settings: React.ReactNode;
    children: React.ReactNode;
}

function ProfileLayout(props: ProfileLayoutProps) {
    const {children, settings} = props;
    const timeRightNow = new Date().toLocaleTimeString()


    const isAuthenticated = () => {
        // TODO: Implement authentication logic
        return false;
    }

    if (!isAuthenticated()) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <h1 className="text-4xl">401 - Unauthorized. Please log in.</h1>
            </div>
        );
    }


    return (
        <div className="bg-amber-200">
            <div>Profile</div>
            <div>The Time Right now is {timeRightNow}</div>
            {/* {settings} */}
            <div>{children}</div>
        </div>
    );
}

export default ProfileLayout;
