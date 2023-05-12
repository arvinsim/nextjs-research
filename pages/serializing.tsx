import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import React from "react";

class Person {
    name?: string
    constructor(name?: string) {
        if (name) {
            this.name = name
        }
    }

    setName(name: string) {
        this.name = name
    }
}


export const getServerSideProps: GetServerSideProps = async () => {
    const person = new Person()
    person.setName('Arthur')

    return {
        props: {
           person
        },
    };
};

function Serializing(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { person} = props;

    return (
        <div>
            <div>My name is {person.name}</div>
        </div>
    );
}

export default Serializing