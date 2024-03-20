'use client'
import useSWR from "swr";
import Error from "../error";
import React from "react";

export function AboutContent() {
    const { data, error, isLoading } = useSWR('/api/delayed-response', (...args) => fetch(...args).then((res) => res.json()))

    if (error) {
        return <Error />
    }

    return (
        <div className="bg-blue-300">
            <h1>About</h1>
            <p>This is the about page</p>
            <p>{isLoading ? 'Loading...' : data?.message}</p>
        </div>
    );
}
