import React from 'react';
import{withRouter} from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({tittle,imageUrl,size,history,linkUrl,match}) =>(
    <div 
    className={`${size} menu-item`}
     onClick={()=>history.push(`${match.url}${linkUrl}`)} >
            <div className='background-image'
                style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
                <div className='menu-content'>
                    <h1 className='tittle'>{tittle.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
    </div>
    
)

export default withRouter(MenuItem);