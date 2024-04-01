import React from "react";
import MarketingLinks from "./MarktingLinks";

type MarketingLayoutProps = {
    children: React.ReactNode
}
export default function MarketingLayout(props: MarketingLayoutProps) {
    return (
        <div className={'bg-amber-200'}>
            <div className={'bg-red-100'}>Marketing Pages</div>
            <MarketingLinks />
            <div>
            {props.children}
            </div>
        </div>
    )
}
