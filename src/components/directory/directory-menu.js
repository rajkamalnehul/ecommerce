import React from 'react';
import MenuItem from '../menu-item/menu-item.js';
import './directory-menu.scss';

class Directory extends React.Component { 
    constructor() {
        super();

        this.state = {
            sections : [
                {
                  tittle: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  tittle: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id:2,
                  linkUrl:''
                },
                {
                  tittle: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  tittle: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl:''
                },
                {
                  tittle: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl:''
                }
              ]
              

        }

    }
    render() {
        return(
            <div className='directory-menu'>
            {
                this.state.sections.map(({tittle,imageUrl,id,size, linkUrl}) => (
                <MenuItem key={id} tittle={tittle} imageUrl={imageUrl} size={size} linkUrl={ linkUrl}/>    
                ))
            }
            </div>
        )
    }
}

export default Directory;