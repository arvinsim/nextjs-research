import React from 'react'
import { useRouter } from 'next/router'

function Posts() {
    const router = useRouter()
    const { pid } = router.query

    return <div>This is post {pid}</div>
}

export default Posts