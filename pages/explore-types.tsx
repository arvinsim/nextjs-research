import React from 'react';
import {GetServerSideProps} from "next";

function ExploreTypes() {
    const people = [{ name: 'Joe'}, {name: 'Jane'}, { name: 'John'}]
    const updatedPeople = removeFirstItemFromArray(people)

    return (
        <div>
            <h1>Explore Types</h1>
            <div>
                {updatedPeople.map((person, index) => {
                    return <div key={index}>{person.name}</div>
                })}
            </div>
            <div>
                {iteratize('foobar').map((letter, index) => {
                    return <span key={index}>{letter},</span>
                })}
            </div>
            <div>
                {iteratize(['q', 'ux']).map((letter, index) => {
                    return <span key={index}>{letter},</span>
                })}
            </div>
        </div>
    );
}

function removeFirstItemFromArray<T extends string | number  | { name: string}>(arr: T[]) {
    const [, ...rest] = arr
    return rest
}

function iteratize<T extends string | Array<string>>(arr: T) {
    if (typeof arr === 'string') {
        const newArr: string[] = []
        for (let i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }

        return newArr
    }

    if (Array.isArray(arr)) {
        return arr
    }

    return []
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // will be passed to the page component as props
    return {
        props: {},
    };
};

export default ExploreTypes;