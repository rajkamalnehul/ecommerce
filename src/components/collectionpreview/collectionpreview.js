import React from 'react';
import './collectionpreview.scss';
import CollectionItem from '../collectionitem/collection-item.js';

const CollectionPreview = ({id,title,items}) =>(
    <div className='collection-preview'> 
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items
            .filter((items, idx)=> idx < 4)
            .map(({id,name,price,imageUrl}) =>(
                <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl}/>
            ))
        }

        </div>
    </div>
)

export default CollectionPreview;