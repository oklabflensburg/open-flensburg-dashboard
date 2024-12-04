import React, { Key } from 'react';

interface CardProps {
    eventName: string;
    description: string;
    location: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = (props) => {


    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-auto max-w-full rounded-lg">
                <a href="#">
                    <img className="rounded-t-lg" src={props.imageUrl} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.eventName}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                </div>
            </div>

        </>

    )

}

export default Card;