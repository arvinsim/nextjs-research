import React from 'react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {

    const links = [
        { href: "/profile/access", label: "Access" },
        { href: "/profile/integrations", label: "Integrations" },
        { href: "/profile/security", label: "Security" },
    ]

    return (
        <div className={'bg-blue-600'}>
            <nav>
                {links.map((link) => (
                    <Link href={link.href} className="block" key={link.label}>Go to {link.label}</Link>
                ))}
            </nav>
            <div>{children}</div>
        </div>
    )
}
