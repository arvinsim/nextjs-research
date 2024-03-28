import React from 'react'
import {BlogLinks} from "./[id]/Links";

type BlogLayoutProps = {
    children: React.ReactNode
}

export default async function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <div>
            <BlogLinks />
            <div className="bg-amber-200">
                {children}
            </div>
        </div>
    );
}
