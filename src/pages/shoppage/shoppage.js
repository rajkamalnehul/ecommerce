import React from 'react';
import './shop-page.scss';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collectionpreview/collectionpreview.js';

class ShopPage extends React.Component {
    constructor(){
        super();
        this.state={
            collections: SHOP_DATA
        };
    }
    render(){
        const {collections}= this.state;
        return(<div>
            {
                collections.map(({id,title,items})=>(
                    <CollectionPreview key={id} title= {title} items={items}/>
                ))
            }
            </div>);
    
    }


}

export default ShopPage;