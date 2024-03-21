import React from 'react';
import Link from "next/link";

function ProfileLayout(props) {
    const {children, settings} = props;
    const timeRightNow = new Date().toLocaleTimeString()

    return (
        <div className="bg-amber-200">
            <div>Profile</div>
            <div>The Time Right now is {timeRightNow}</div>
            {settings}
            <div>{children}</div>
        </div>
    );
}

export default ProfileLayout;
