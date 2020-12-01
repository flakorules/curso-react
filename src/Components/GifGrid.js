import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);
    return (
        <>
        <h1>{category}</h1>

        <div className="card-grid">
             {data.map((x) => { 
                return <GifGridItem 
                    key={x.id}
                    {...x} />
                })
            }
        
        </div>
        </>
    )
}

export default GifGrid;