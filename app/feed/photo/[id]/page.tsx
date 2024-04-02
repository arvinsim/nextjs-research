import React from 'react'
import Photo from "@/_components/Photo";
import Link from "next/link";

type PhotoPageProps = {
    params: {
        id: string
    }
}
export default function PhotoPage(props: PhotoPageProps) {
    return <div>
        <h1>Photo Page</h1>
        <Link href={'/feed'}>Back to Feed Page</Link>
        <Photo id={props.params.id} />
    </div>
}
