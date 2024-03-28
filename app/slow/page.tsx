import React from 'react'
import {fetchDataWithDelay} from "../../utilities";

type SlowPageProps = {}

async function getDelay() {
    await fetchDataWithDelay()
    console.info('Slow page delayed')
    return {
        success: true
    }
}

export default async function SlowPage(props: SlowPageProps) {
    let { success } = await getDelay()

    if (!success) {
        return <div>
            <div>Failed to load slow page</div>
        </div>
    }

    return <div>
        <div>This is a slow page. The loading page should have been displayed before.</div>
    </div>
}
