import React from 'react'
import Link from "next/link";

function FeedLayout() {
    const ids = [1,2,3]

    return <ul>
        {ids.map((id: number) => {
            return <li key={id}>
                <Link href={`/feed/photo/${id}`}>Photo {id}</Link>
            </li>
        })}
    </ul>
}

export default FeedLayout
