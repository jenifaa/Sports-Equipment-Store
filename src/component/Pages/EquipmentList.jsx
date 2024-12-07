import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const EquipmentList = () => {
    const equipmentData = useLoaderData();
    // const id = useParams();
    const [cards,setCards] = useState(equipmentData);
    console.log(equipmentData);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cards.map(card => <Card key={card._id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default EquipmentList;