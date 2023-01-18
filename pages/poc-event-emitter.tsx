import React, {useEffect} from 'react';
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import EventEmitter from "events";

function PocEventEmitter(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const emitter = new EventEmitter()
    useEffect(() => {
        emitter.on(Events.BUTTON_CLICKED, () => {
            console.log('BUTTON_CLICKED is clicked')
        })
        return () => {
            emitter.off(Events.BUTTON_CLICKED, () => {
                console.log('BUTTON_CLICKED is deregistered')
            })
        }
    })

    return (
        <div>
            <button onClick={() => {
                emitter.emit(Events.BUTTON_CLICKED)
            }}>Click me</button>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // will be passed to the page component as props
    return {
        props: {},
    };
};

const Events  = {
    BUTTON_CLICKED: 'button_clicked'
}


export default PocEventEmitter;