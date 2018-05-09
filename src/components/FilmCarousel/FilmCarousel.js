import './FilmCarousel.css';
import React from 'react';

import FilmItem from 'components/FilmItem/FilmItem';

function FilmCarousel({items}) {
    return (
        <div className='component-film-carousel'>
            { 
                items.map(function(item, index) {
                    const image = item.images.image && item.images.image[0].src;
                                return (
                                    <FilmItem 
                                        key={item.id}
                                        permaLink={item.permaLink}
                                        imageSrc={image}
                                        title={item.title}
                                    />
                                )
                            })
                }
        </div>
    );
}

export default FilmCarousel;