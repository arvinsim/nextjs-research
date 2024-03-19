import React from 'react';
import Link from "next/link";

function ProfileLayout(props) {
    const {children} = props;
    const timeRightNow = new Date().toLocaleTimeString()

    return (
        <div className="bg-amber-200">
            <div>Profile</div>
            <ul>
                <li><Link href={"/profile/about"} className="text-blue-600">About</Link></li>
                <li><Link href={"/profile/settings"} className="text-blue-600">Settings</Link></li>
            </ul>
            <div>The Time Right now is {timeRightNow}</div>
            <div>{children}</div>
        </div>
    );
}

export default ProfileLayout;
