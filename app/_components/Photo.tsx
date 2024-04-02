import React from 'react'

type PhotoProps = {
    id: string
}

export default function Photo(props: PhotoProps) {
    return <div className={"bg-amber-200 text-black-600 text-8xl mx-auto"}>
        This is Photo #{props.id}
    </div>
}
