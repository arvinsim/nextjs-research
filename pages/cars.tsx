import React, {useEffect, useState} from 'react';
import axios from "axios";

export const API_ENDPOINT = 'http://api.com'

function Cars() {
    const [cars, setCars] = useState<{ id: string, name: string}[]>()

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`${API_ENDPOINT}/cars`)
            setCars(data.cars)
        }
        fetchData()
    })

    return (
        <div>
            <div className={'page-title'}>Cars</div>
            <div className={'cars'}>
                {cars?.map(car => {
                    return <div className={'car'} key={car.id}>
                        <div>{car.id}</div>
                        <div>{car.name}</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Cars;