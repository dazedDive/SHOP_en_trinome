import React from 'react';
import { useParams } from 'react-router-dom';


const ArtistDetail = () => {

    const {id}=useParams();
    return (
        <div>
            <h1>Artist detail : {id}</h1>
        </div>
    );
};

export default ArtistDetail;