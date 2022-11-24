import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductCategories = () => {
    const data = useLoaderData()
    return (
        <div>
            <p>this is product Categories {data.length}</p>
            
        </div>
    );
};

export default ProductCategories;