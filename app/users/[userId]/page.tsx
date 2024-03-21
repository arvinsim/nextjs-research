import React from 'react';

type UserPageProps = {
    params: {
        userId: string
    }
}

function UserPage({ params }: UserPageProps) {
    return (
        <div className="bg-emerald-300">
            <h1>User Slug: {params.userId}</h1>
        </div>
    );
}

export default UserPage;
