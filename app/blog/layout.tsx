import React from 'react'
import {BlogLinks} from "./[id]/Links";

export default async function BlogLayout({ children }) {
    return (
        <div>
            <BlogLinks />
            <div className="bg-amber-200">
                {children}
            </div>
        </div>
    );
}
