import React from 'react'

type WhateverSlugPageProps = {
    params: {
        slug: string[]
    }
}

export default function WhateverSlugPage(props: WhateverSlugPageProps) {
    const slugPath =  props.params.slug.join('/')

    return <div>You are accessing this page with the slug, {slugPath}</div>
}
