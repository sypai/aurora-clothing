import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'

class Directory extends React.Component 
{
    constructor()
    {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'women',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  id: 4,
                  linkUrl: 'shop/women',
                  size: 'large'
                },
                {
                  title: 'men',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  id: 5,
                  linkUrl: 'shop/men',
                  size: 'large'
                }
              ]
        }
    }

    render() {
    
        return (
            <div className='directory-menu'>
            {
                // this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                this.state.sections.map(({ id, ...otherSectionProps }) => (
                    // <MenuItem key={id} title={title} img={imageUrl} size={size} linkUrl={linkUrl} />
                    <MenuItem key={id} {...otherSectionProps} />
                    )
                )
            }
        </div>
        )
    }
}

export default Directory;