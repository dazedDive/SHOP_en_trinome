import React from 'react';
import { useParams } from 'react-router-dom';

const CollectionDetail = () => {

    const {id}=useParams();

    return (
        <div>
            <h1>CollectionDetail:{id}</h1>
        </div>
    );
};

export default CollectionDetail;