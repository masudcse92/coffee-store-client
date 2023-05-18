// import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewCoffe = () => {
    const coffee = useLoaderData();

    const  {name, quantity, supplier, photo} = coffee;

    return (
        <div>
            <h2>View coffee : {name}</h2>
            <h2>Quantiy : {quantity}</h2>
            <h2>supplier : {supplier}</h2>
            <img src={photo} alt="" />
        </div>
    );
};

export default ViewCoffe;