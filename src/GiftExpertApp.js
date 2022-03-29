import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GiftExpertApp = () => {
    /* const categories=["One puch","Dragon ball","Naruto"]; */
    const [categories, setCategories] = useState(["One punch"]);
    const handleAdd=()=>{
        setCategories([...categories,"One piece"]);
    }
    return (
            <>
                <h2>GiftExpertApp</h2>
                <AddCategory setCategories={setCategories}></AddCategory>
                <hr/>
                {/* <button onClick={handleAdd}>Agregar</button> */}
                <ol>
                    {categories.map( category=>
                        <GifGrid
                            key={category} 
                            category={category}
                        />
                    )}
                </ol>
            </>
    )
}
