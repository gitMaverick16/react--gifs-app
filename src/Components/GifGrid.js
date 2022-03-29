import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    
    const {data:images, loading}=useFetchGifs(category);
    

    getGifs();
    return (
        <>
            <h3 className='animate_animated animate__fadeIn'>{category}</h3>

            {loading&&<p className='animate_animated animate__flash'>Loading</p>}
            
            <div className='card-grid'>
                
               
                    {
                        images.map(img=>(
                            <GifGridItem key={img.id} {...img}/>
                        ))
                    }
          
            </div>
        </>
    )
    }
