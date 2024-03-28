'use client'

import Link from "next/link";
import React from "react";
import {usePathname, useRouter} from "next/navigation";

export function BlogLinks() {
    const pathname = usePathname()
    const router = useRouter()

    return <div>
        <ul>
            <li><Link href="/blog/1" className={pathname == '/blog/1' ? 'bg-red-100' : ''}>Go to First Blog</Link></li>
            <li>
                <button type="button" onClick={() => router.push('/blog/2')} className={pathname == '/blog/2' ? 'bg-red-100' : ''}>
                    Go to Second Blog
                </button>
            </li>
        </ul>
    </div>
}
