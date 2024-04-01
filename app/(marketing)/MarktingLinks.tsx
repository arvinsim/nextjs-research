'use client'

import React from "react";
import Link from "next/link";

export default function MarketingLinks() {
    return (
        <div>
            <ul className={'list-disc'}>
                <li><Link href="/press-releases">Press Releases</Link></li>
                <li><Link href="/landing-page">Landing Page</Link></li>
            </ul>
        </div>
    )
}
