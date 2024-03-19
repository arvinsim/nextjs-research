'use client'

import React  from 'react';

function ProfileTemplate(props) {
    const { children } = props;

    return (
        <div>
            <div>{children}</div>
        </div>
    );
}

export default ProfileTemplate;
