import React from 'react'

type CarInfoProps = {
    params: {
        carInfo: string[]
    }

}

function CarInfo(props: CarInfoProps) {
    return (
        <div className="bg-emerald-300">
            <h1>Car Info</h1>
            <br />
            {props.params.carInfo.map((info, index) => {
                return <p key={index}>{info}</p>
            })}
        </div>
    )
}

export default CarInfo;
