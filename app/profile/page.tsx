import React from 'react'
import { useCookies } from 'react-cookie';

function ProfilePage() {
    const isAuthenticated = () => {
        // TODO: Implement authentication logic
        return false;
    }

    if (!isAuthenticated()) {
        return <div>401 - Unauthorized. Please log in.</div>
    }

    return <div>This is Profile Page</div>
}
export default ProfilePage